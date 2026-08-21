#!/usr/bin/env node
/**
 * Checks the two stylesheets the build emits.
 *
 * `zvs-uikit-lib.css` must stay unlayered and `zvs-uikit-lib.layered.css` must
 * be the same CSS wrapped in the `zvs-uikit` cascade layer. Getting either
 * wrong is invisible to typecheck, lint and the tests — it only shows up in
 * someone else's app, as components that cannot be overridden without
 * `!important` or, the other way round, components stripped of their styles by
 * the app's own CSS.
 *
 * Run after `build:package`.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(repoRoot, "package/dist");
const plainFile = join(distDir, "zvs-uikit-lib.css");
const layeredFile = join(distDir, "zvs-uikit-lib.layered.css");
const LAYER_OPEN = "@layer zvs-uikit{";
const HOISTED = /@(?:charset|import|property)[^{;]*(?:;|\{[^}]*\})/g;

const problems = [];

const read = (file) => {
    if (!existsSync(file)) {
        problems.push(
            `${relative(repoRoot, file)} is missing — run "npm run build:package" first`,
        );

        return null;
    }

    return readFileSync(file, "utf8");
};

const bracesBalanced = (css) => {
    let depth = 0;

    for (const character of css) {
        if (character === "{") depth += 1;
        else if (character === "}") depth -= 1;

        if (depth < 0) return false;
    }

    return depth === 0;
};

const plain = read(plainFile);
const layered = read(layeredFile);

if (plain !== null && plain.includes("@layer")) {
    problems.push(
        "zvs-uikit-lib.css contains @layer — it is the unlayered build and must stay that way",
    );
}

if (layered !== null) {
    const layerAt = layered.indexOf(LAYER_OPEN);

    if (layerAt === -1) {
        problems.push(
            `zvs-uikit-lib.layered.css is not wrapped in "${LAYER_OPEN}...}"`,
        );
    } else {
        const before = layered.slice(0, layerAt);
        const inside = layered.slice(layerAt);

        if (/\S/.test(before.replace(HOISTED, ""))) {
            problems.push(
                "zvs-uikit-lib.layered.css has CSS outside the layer beyond the hoisted @charset, @import and @property rules",
            );
        }

        if (inside.includes("@property")) {
            problems.push(
                "zvs-uikit-lib.layered.css keeps an @property rule inside the layer; registration there is not reliable across browsers",
            );
        }
    }

    if (!bracesBalanced(layered)) {
        problems.push(
            "zvs-uikit-lib.layered.css has unbalanced braces — the layer wrap is malformed",
        );
    }
}

if (plain !== null && layered !== null) {
    const stripped = layered
        .replace(HOISTED, "")
        .replace(LAYER_OPEN, "")
        .replace(/\}$/, "");

    if (stripped.length !== plain.replace(HOISTED, "").length) {
        problems.push(
            "the two stylesheets do not carry the same rules; the layered build should differ only by the wrapper",
        );
    }
}

if (problems.length > 0) {
    console.error("The built stylesheets are not shippable:\n");

    for (const problem of problems) console.error(`  - ${problem}`);

    process.exit(1);
}

console.log(
    `zvs-uikit-lib.css is unlayered and zvs-uikit-lib.layered.css wraps the same rules in "${LAYER_OPEN}".`,
);
