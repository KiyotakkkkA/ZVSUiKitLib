#!/usr/bin/env node
/**
 * Fails when anything reachable from the `/server` entry point uses React
 * context.
 *
 * The `/server` entry exists so its components can render inside a React
 * Server Component. `createContext` and `useContext` are client-only APIs, so
 * a single import edge from a server-safe component into a hook that reads
 * context breaks every consumer's build with "You're importing a module that
 * depends on createContext into a React Server Component module" — and the
 * bundle builds fine, so nothing catches it before a consumer does.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const entry = join(repoRoot, "package/src/server.ts");

const CLIENT_ONLY_APIS = [
    "createContext",
    "useContext",
    "useState",
    "useEffect",
    "useLayoutEffect",
    "useReducer",
    "useSyncExternalStore",
];

const resolveImport = (fromFile, specifier) => {
    if (!specifier.startsWith(".")) return null;

    const base = normalize(join(dirname(fromFile), specifier));
    const candidates = [
        `${base}.ts`,
        `${base}.tsx`,
        join(base, "index.ts"),
        join(base, "index.tsx"),
    ];

    return candidates.find((candidate) => existsSync(candidate)) ?? null;
};

/** Import specifiers whose bindings survive into the emitted JavaScript. */
const valueImports = (file) => {
    const source = readFileSync(file, "utf8")
        // `import type ... ` and `export type ...` are erased by TypeScript.
        .replace(/^[ \t]*(?:import|export)[ \t]+type[ \t][^;]*;/gm, "");

    return [...source.matchAll(/(?:from\s+|import\s+)"([^"]+)"/g)]
        .map((match) => resolveImport(file, match[1]))
        .filter(Boolean);
};

const usedClientApis = (file) => {
    const source = readFileSync(file, "utf8").replace(
        /^[ \t]*(?:import|export)[ \t]+type[ \t][^;]*;/gm,
        "",
    );

    return CLIENT_ONLY_APIS.filter((api) =>
        new RegExp(`\\b${api}\\s*[(<]`).test(source),
    );
};

const parents = new Map([[entry, null]]);
const queue = [entry];
const failures = [];

while (queue.length > 0) {
    const file = queue.shift();
    const apis = usedClientApis(file);

    if (apis.length > 0) {
        const trail = [];

        for (let step = file; step; step = parents.get(step)) {
            trail.unshift(relative(repoRoot, step));
        }

        failures.push({ apis, trail });
        continue;
    }

    for (const imported of valueImports(file)) {
        if (parents.has(imported)) continue;

        parents.set(imported, file);
        queue.push(imported);
    }
}

if (failures.length > 0) {
    console.error(
        `The /server entry reaches ${failures.length} module(s) that use client-only React APIs:\n`,
    );

    for (const { apis, trail } of failures) {
        console.error(`  ${trail.at(-1)} uses ${apis.join(", ")}`);
        console.error(`    via ${trail.join("\n        -> ")}\n`);
    }

    console.error(
        "Either keep the module out of package/src/ui/server.ts, or read the\n" +
            "value it needs from a plain module (for example defaultDictionary)\n" +
            "instead of from React context.",
    );

    process.exit(1);
}

console.log(
    `/server entry is clean: ${parents.size} modules checked, no client-only React APIs.`,
);
