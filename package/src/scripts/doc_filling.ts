#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as ts from "typescript";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const sourceDirectory = resolve(process.argv[2] ?? join(scriptDirectory, ".."));
const docsDirectory = join(sourceDirectory, "docs");
const uiDirectory = join(sourceDirectory, "ui");
const packageImport = "@kiyotakkkka/zvs-uikit-lib";
const subpathImports = {
    Chart: `${packageImport}/chart`,
    CodeView: `${packageImport}/code-view`,
};

function importPathFor(componentName) {
    return subpathImports[componentName] ?? packageImport;
}

function markdownCell(value) {
    return value
        .replace(/\s+/g, " ")
        .split("|")
        .join("\\|")
        .split("`")
        .join("\\`")
        .trim();
}

function sharedTypeNames(sourceFile) {
    const names = new Set();

    for (const statement of sourceFile.statements) {
        if (
            ts.isImportDeclaration(statement) &&
            ts.isStringLiteral(statement.moduleSpecifier) &&
            statement.moduleSpecifier.text.endsWith("_shared/types") &&
            statement.importClause?.namedBindings &&
            ts.isNamedImports(statement.importClause.namedBindings)
        ) {
            for (const element of statement.importClause.namedBindings
                .elements) {
                if (!element.name.text.endsWith("ClassName")) {
                    names.add(element.name.text);
                }
            }
        }
    }

    return names;
}

function renderType(typeNode, sourceFile, sharedTypes) {
    let typeText = markdownCell(typeNode?.getText(sourceFile) ?? "unknown");
    let hasSharedLink = false;

    for (const sharedType of sharedTypes) {
        const pattern = new RegExp(`\\b${sharedType}\\b`, "g");

        if (pattern.test(typeText)) {
            hasSharedLink = true;
            typeText = typeText.replace(
                pattern,
                `[${sharedType}](./dict.md#${sharedType.toLowerCase()})`,
            );
        }
    }

    return hasSharedLink ? typeText : `\`${typeText}\``;
}

function headingAnchor(value) {
    return value
        .toLowerCase()
        .replace(/`/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function jsDocDescription(node) {
    const comments = ts
        .getJSDocCommentsAndTags(node)
        .filter(ts.isJSDoc)
        .map((doc) => ts.getTextOfJSDocComment(doc.comment))
        .filter(Boolean);

    return comments.join(" ").trim() || "No description provided.";
}

function typeLiteralFromAlias(alias) {
    if (ts.isTypeLiteralNode(alias.type)) {
        return alias.type;
    }

    if (ts.isTypeReferenceNode(alias.type)) {
        return alias.type.typeArguments?.find(ts.isTypeLiteralNode);
    }

    if (ts.isIntersectionTypeNode(alias.type)) {
        for (const type of alias.type.types) {
            if (ts.isTypeLiteralNode(type)) {
                return type;
            }

            if (ts.isTypeReferenceNode(type)) {
                const wrappedLiteral = type.typeArguments?.find(
                    ts.isTypeLiteralNode,
                );

                if (wrappedLiteral) {
                    return wrappedLiteral;
                }
            }
        }
    }

    return undefined;
}

function propertyName(member, sourceFile) {
    if (!member.name) {
        return "";
    }

    if (
        ts.isIdentifier(member.name) ||
        ts.isStringLiteral(member.name) ||
        ts.isNumericLiteral(member.name)
    ) {
        return member.name.text;
    }

    return member.name.getText(sourceFile);
}

function renderPropertyTable(
    typeLiteral,
    sourceFile,
    sharedTypes,
    defaults,
    sectionName,
) {
    const properties = typeLiteral.members.filter(ts.isPropertySignature);

    if (properties.length === 0) {
        return [];
    }

    return [
        "| Property | Type | Default | Required | Description |",
        "| --- | --- | --- | --- | --- |",
        ...properties.map((property) => {
            const name = markdownCell(propertyName(property, sourceFile));
            const type = ts.isTypeLiteralNode(property.type)
                ? "`object`"
                : renderType(property.type, sourceFile, sharedTypes);
            const defaultValue = defaults.get(name);
            const renderedDefault =
                defaultValue === undefined
                    ? "-"
                    : `\`${markdownCell(defaultValue)}\``;
            const required = property.questionToken ? "No" : "Yes";
            const description = markdownCell(jsDocDescription(property));

            return `| \`${name}\` | ${type} | ${renderedDefault} | ${required} | ${description} |`;
        }),
        "",
        ...properties.flatMap((property) => {
            if (!ts.isTypeLiteralNode(property.type)) {
                return [];
            }

            const name = propertyName(property, sourceFile);
            return [
                `#### ${sectionName}.${name}`,
                "",
                ...(name === "classNames"
                    ? renderClassNamesTable(property.type, sourceFile)
                    : renderPropertyTable(
                          property.type,
                          sourceFile,
                          sharedTypes,
                          new Map(),
                          `${sectionName}.${name}`,
                      )),
            ];
        }),
    ];
}

function renderClassNamesTable(typeLiteral, sourceFile) {
    const properties = typeLiteral.members.filter(ts.isPropertySignature);

    if (properties.length === 0) {
        return [];
    }

    return [
        "| Property | Description |",
        "| --- | --- |",
        ...properties.map((property) => {
            const name = markdownCell(propertyName(property, sourceFile));
            const description = markdownCell(jsDocDescription(property));

            return `| \`${name}\` | ${description} |`;
        }),
        "",
    ];
}

function renderTypeAlias(
    alias,
    sourceFile,
    sharedTypes,
    defaultsByType,
    displayName,
) {
    const name = alias.name.text;
    const literal = typeLiteralFromAlias(alias);
    const lines = [`### ${displayName}`, ""];
    const description = jsDocDescription(alias);

    if (description !== "No description provided.") {
        lines.push(description, "");
    }

    if (literal) {
        const inheritedTypes = ts.isIntersectionTypeNode(alias.type)
            ? alias.type.types
                  .filter((type) => type !== literal)
                  .map((type) => markdownCell(type.getText(sourceFile)))
            : [];

        if (inheritedTypes.length > 0) {
            lines.push(
                `Extends: ${inheritedTypes.map((type) => `\`${type}\``).join(", ")}.`,
                "",
            );
        }

        lines.push(
            ...(name.endsWith("ClassNames")
                ? renderClassNamesTable(literal, sourceFile)
                : renderPropertyTable(
                      literal,
                      sourceFile,
                      sharedTypes,
                      defaultsByType.get(name) ?? new Map(),
                      displayName,
                  )),
            "",
        );
    } else {
        lines.push(
            "```ts",
            `type ${name} = ${alias.type.getText(sourceFile)};`,
            "```",
            "",
        );
    }

    return lines;
}

function orderTypeAliases(aliases) {
    const classNamesAliases = aliases.filter((alias) =>
        alias.name.text.endsWith("ClassNames"),
    );
    const regularAliases = aliases.filter(
        (alias) => !alias.name.text.endsWith("ClassNames"),
    );
    const ordered = [];
    const attachedClassNames = new Set();

    for (const alias of regularAliases) {
        ordered.push(alias);

        if (!alias.name.text.endsWith("Props")) {
            continue;
        }

        const expectedClassNames = `${alias.name.text.slice(0, -"Props".length)}ClassNames`;
        const classNamesAlias = classNamesAliases.find(
            (candidate) => candidate.name.text === expectedClassNames,
        );

        if (classNamesAlias) {
            ordered.push(classNamesAlias);
            attachedClassNames.add(classNamesAlias.name.text);
        }
    }

    ordered.push(
        ...classNamesAliases.filter(
            (alias) => !attachedClassNames.has(alias.name.text),
        ),
    );

    return ordered;
}

function collectDefaults(sourceFile) {
    const defaultsByType = new Map();

    function visit(node) {
        if (
            ts.isParameter(node) &&
            ts.isObjectBindingPattern(node.name) &&
            node.type &&
            ts.isTypeReferenceNode(node.type) &&
            ts.isIdentifier(node.type.typeName)
        ) {
            const typeName = node.type.typeName.text;
            const defaults = defaultsByType.get(typeName) ?? new Map();

            for (const element of node.name.elements) {
                if (ts.isIdentifier(element.name) && element.initializer) {
                    defaults.set(
                        element.name.text,
                        element.initializer.getText(sourceFile),
                    );
                }
            }

            defaultsByType.set(typeName, defaults);
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return defaultsByType;
}

function collectCompoundTypeNames(sourceFile, componentName) {
    const functionTypes = new Map();
    const displayNames = new Map([[`${componentName}Props`, [componentName]]]);

    function visit(node) {
        if (
            (ts.isFunctionDeclaration(node) ||
                ts.isFunctionExpression(node) ||
                ts.isArrowFunction(node)) &&
            node.parameters[0]?.type &&
            ts.isTypeReferenceNode(node.parameters[0].type) &&
            ts.isIdentifier(node.parameters[0].type.typeName)
        ) {
            const functionName =
                (ts.isFunctionDeclaration(node) ||
                    ts.isFunctionExpression(node)) &&
                node.name &&
                ts.isIdentifier(node.name)
                    ? node.name.text
                    : ts.isVariableDeclaration(node.parent) &&
                        ts.isIdentifier(node.parent.name)
                      ? node.parent.name.text
                      : undefined;

            if (functionName) {
                functionTypes.set(
                    functionName,
                    node.parameters[0].type.typeName.text,
                );
            }
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    for (const statement of sourceFile.statements) {
        if (
            ts.isVariableStatement(statement) &&
            statement.modifiers?.some(
                (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
            )
        ) {
            for (const declaration of statement.declarationList.declarations) {
                if (
                    ts.isIdentifier(declaration.name) &&
                    declaration.name.text === componentName &&
                    declaration.initializer &&
                    ts.isCallExpression(declaration.initializer) &&
                    declaration.initializer.expression.getText(sourceFile) ===
                        "Object.assign"
                ) {
                    const parts = declaration.initializer.arguments[1];

                    if (parts && ts.isObjectLiteralExpression(parts)) {
                        for (const property of parts.properties) {
                            if (
                                ts.isPropertyAssignment(property) &&
                                ts.isIdentifier(property.name) &&
                                ts.isIdentifier(property.initializer)
                            ) {
                                const typeName = functionTypes.get(
                                    property.initializer.text,
                                );
                                if (typeName) {
                                    const names =
                                        displayNames.get(typeName) ?? [];
                                    names.push(
                                        `${componentName}.${property.name.text}`,
                                    );
                                    displayNames.set(typeName, names);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return displayNames;
}

function exportedTypeAliases(sourceFile) {
    return sourceFile.statements.filter(
        (statement) =>
            ts.isTypeAliasDeclaration(statement) &&
            statement.modifiers?.some(
                (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
            ),
    );
}

async function generateComponentDocument(markdownFile) {
    const componentDirectory = dirname(markdownFile);
    const componentName =
        basename(markdownFile) === "example.md"
            ? basename(componentDirectory)
            : basename(markdownFile, ".md");
    const typesFile = join(componentDirectory, "types.ts");
    const example = (await readFile(markdownFile, "utf8")).trim();
    const typesSource = await readFile(typesFile, "utf8");
    const componentSourcePath = join(
        componentDirectory,
        `${componentName}.tsx`,
    );
    const componentSourceText = await readFile(componentSourcePath, "utf8");
    const sourceFile = ts.createSourceFile(
        typesFile,
        typesSource,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
    );
    const componentSource = ts.createSourceFile(
        componentSourcePath,
        componentSourceText,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
    );
    const aliases = orderTypeAliases(exportedTypeAliases(sourceFile));
    const sharedTypes = sharedTypeNames(sourceFile);
    const defaultsByType = collectDefaults(componentSource);
    const displayNames = collectCompoundTypeNames(
        componentSource,
        componentName,
    );
    const sections = aliases.flatMap((alias) => {
        const names = displayNames.get(alias.name.text) ?? [alias.name.text];
        return names.map((displayName) => ({ alias, displayName }));
    });
    const toc = [
        "- [Import](#import)",
        "- [API](#api)",
        ...sections.map(({ alias, displayName }, index) => {
            const previousAlias = sections[index - 1]?.alias;
            const isAttachedClassNames =
                alias.name.text.endsWith("ClassNames") &&
                previousAlias?.name.text.endsWith("Props") &&
                alias.name.text ===
                    `${previousAlias.name.text.slice(0, -"Props".length)}ClassNames`;
            const indentation = isAttachedClassNames ? "    " : "  ";

            return `${indentation}- [${displayName}](#${headingAnchor(displayName)})`;
        }),
        "- [Example](#example)",
    ];
    const lines = [
        `# ${componentName}`,
        "",
        "## Table of contents",
        "",
        ...toc,
        "",
        "## Import",
        "",
        "```tsx",
        `import { ${componentName} } from "${importPathFor(componentName)}";`,
        "```",
        "",
        "## API",
        "",
        ...sections.flatMap(({ alias, displayName }) =>
            renderTypeAlias(
                alias,
                sourceFile,
                sharedTypes,
                defaultsByType,
                displayName,
            ),
        ),
        example,
        "",
    ];

    return lines.join("\n");
}

async function findMarkdownFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const absolutePath = join(directory, entry.name);

        if (entry.isDirectory()) {
            if (absolutePath === docsDirectory || entry.name === "scripts") {
                continue;
            }
            files.push(...(await findMarkdownFiles(absolutePath)));
        } else if (entry.isFile() && extname(entry.name) === ".md") {
            files.push(absolutePath);
        }
    }

    return files;
}

function normalizeDocument(markdown) {
    return markdown
        .split("../../docs/dict.md")
        .join("./dict.md")
        .split("../docs/dict.md")
        .join("./dict.md");
}

function withGeneratedTableOfContents(markdown) {
    const normalized = markdown.trim();
    const titleMatch = normalized.match(/^#\s+.+$/m);

    if (!titleMatch) {
        return normalized;
    }

    const headings = [...normalized.matchAll(/^##\s+(.+)$/gm)]
        .map((match) => match[1]?.trim())
        .filter(Boolean);
    const body = normalized
        .slice(titleMatch.index! + titleMatch[0].length)
        .trim();

    return [
        titleMatch[0],
        "",
        "## Table of contents",
        "",
        ...headings.map(
            (heading) => `- [${heading}](#${headingAnchor(heading)})`,
        ),
        "",
        body,
        "",
    ].join("\n");
}

function titleFromMarkdown(markdown, fallback) {
    return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback;
}

async function generateSharedTypeDictionary() {
    const sharedTypesFile = join(uiDirectory, "_shared", "types.ts");
    const sourceText = await readFile(sharedTypesFile, "utf8");
    const sourceFile = ts.createSourceFile(
        sharedTypesFile,
        sourceText,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
    );
    const aliases = exportedTypeAliases(sourceFile).filter(
        (alias) => !alias.name.text.endsWith("ClassName"),
    );

    return [
        "# Shared type dictionary",
        "",
        "## Table of contents",
        "",
        ...aliases.map(
            (alias) =>
                `- [${alias.name.text}](#${headingAnchor(alias.name.text)})`,
        ),
        "",
        ...aliases.flatMap((alias) => [
            `## ${alias.name.text}`,
            "",
            "```ts",
            `type ${alias.name.text}${alias.typeParameters?.length ? `<${alias.typeParameters.map((parameter) => parameter.getText(sourceFile)).join(", ")}>` : ""} = ${alias.type.getText(sourceFile)};`,
            "```",
            "",
        ]),
    ].join("\n");
}

async function main() {
    await mkdir(docsDirectory, { recursive: true });

    const sourceFiles = await findMarkdownFiles(sourceDirectory);
    const documents = [];
    const seenNames = new Map();

    for (const sourceFile of sourceFiles.sort()) {
        const relativeToUi = relative(uiDirectory, sourceFile);
        const isComponent =
            relativeToUi !== "" && !relativeToUi.startsWith("..");
        const outputName = isComponent
            ? `${basename(dirname(sourceFile))}.md`
            : basename(sourceFile);
        const previousSource = seenNames.get(outputName);

        if (previousSource) {
            throw new Error(
                `Cannot generate ${outputName}: both ${relative(sourceDirectory, previousSource)} and ${relative(sourceDirectory, sourceFile)} use that name.`,
            );
        }

        seenNames.set(outputName, sourceFile);
        const markdown = normalizeDocument(
            isComponent
                ? await generateComponentDocument(sourceFile)
                : withGeneratedTableOfContents(
                      await readFile(sourceFile, "utf8"),
                  ),
        );
        documents.push({
            name: titleFromMarkdown(markdown, basename(outputName, ".md")),
            outputName,
            sourceFile,
            markdown,
        });
    }

    await Promise.all(
        documents.map(({ outputName, markdown }) =>
            writeFile(join(docsDirectory, outputName), markdown),
        ),
    );

    await writeFile(
        join(docsDirectory, "dict.md"),
        await generateSharedTypeDictionary(),
    );

    const index = [
        "# Documentation",
        "",
        "## Table of contents",
        "",
        ...documents.map(
            ({ name, outputName }) => `- [${name}](./${outputName})`,
        ),
        "",
        "## Sources",
        "",
        "| API | Documentation | Source |",
        "| --- | --- | --- |",
        ...documents.map(
            ({ name, outputName, sourceFile }) =>
                `| \`${name}\` | [${outputName}](./${outputName}) | \`${relative(sourceDirectory, sourceFile).split("\\").join("/")}\` |`,
        ),
        "",
    ].join("\n");

    await writeFile(join(docsDirectory, "index.md"), index);
    console.log(
        `Generated ${documents.length} documentation pages in ${relative(process.cwd(), docsDirectory)}.`,
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
