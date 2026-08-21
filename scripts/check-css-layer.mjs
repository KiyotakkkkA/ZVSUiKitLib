#!/usr/bin/env node
/**
 * Fails when the built stylesheet is not wrapped in the `zvs-uikit` cascade
 * layer.
 *
 * Unlayered CSS beats layered CSS whatever the source order, so an unlayered
 * build silently wins against Tailwind's `@layer utilities` and forces
 * consumers to write `!important` on every override. Nothing in typecheck,
 * lint or the tests can see that — it only shows up in someone else's app.
 *
 * Run after `build:package`.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const cssFile = join(repoRoot, "package/dist/zvs-uikit-lib.css");
const LAYER_OPEN = "@layer zvs-uikit{";

if (!existsSync(cssFile)) {
    console.error(
        `${relative(repoRoot, cssFile)} is missing. Run "npm run build:package" first.`,
    );
    process.exit(1);
}

const css = readFileSync(cssFile, "utf8");
const layerAt = css.indexOf(LAYER_OPEN);
const problems = [];

if (layerAt === -1) {
    problems.push(
        `the stylesheet is not wrapped in "${LAYER_OPEN}...}" — consumers will need !important to override any component`,
    );
}

const beforeLayer = layerAt === -1 ? css : css.slice(0, layerAt);
const insideLayer = layerAt === -1 ? "" : css.slice(layerAt);

if (/[^\s]/.test(beforeLayer.replace(/@(?:charset|import|property)[^{;]*(?:;|\{[^}]*\})/g, ""))) {
    problems.push(
        "there is CSS outside the layer other than hoisted @charset, @import and @property rules; anything unlayered beats Tailwind utilities",
    );
}

if (insideLayer.includes("@property")) {
    problems.push(
        "an @property rule is inside the layer; registration there is not reliable across browsers, so it must be hoisted",
    );
}

let depth = 0;
for (const character of css) {
    if (character === "{") depth += 1;
    else if (character === "}") depth -= 1;

    if (depth < 0) break;
}

if (depth !== 0) {
    problems.push(`braces are unbalanced (depth ${depth}) — the layer wrap is malformed`);
}

if (problems.length > 0) {
    console.error("package/dist/zvs-uikit-lib.css is not shippable:\n");

    for (const problem of problems) console.error(`  - ${problem}`);

    process.exit(1);
}

console.log(
    `zvs-uikit-lib.css is wrapped in "${LAYER_OPEN}" with ${(beforeLayer.match(/@property/g) ?? []).length} @property rules hoisted above it.`,
);
