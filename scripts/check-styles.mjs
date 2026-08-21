#!/usr/bin/env node
/**
 * Checks the stylesheet the build ships.
 *
 * The components carry Tailwind utilities now, so nothing imports the
 * stylesheet and Vite only emits it because a plugin asks it to. If that
 * plugin ever stops running the build still succeeds and the package ships
 * without its design tokens, which no other check would notice.
 *
 * Run after `build:package`.
 */

import { existsSync, globSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const shipped = join(repoRoot, "package/dist/styles.css");
const problems = [];

if (!existsSync(shipped)) {
    problems.push(
        'package/dist/styles.css is missing — the emit-stylesheet plugin did not run. Run "npm run build:package" first.',
    );
} else {
    const css = readFileSync(shipped, "utf8");

    for (const marker of ["@theme", "--color-main-500", "@keyframes zvs-"]) {
        if (!css.includes(marker)) {
            problems.push(`package/dist/styles.css is missing ${marker}`);
        }
    }
}

const leftovers = globSync("package/src/**/*.module.css", { cwd: repoRoot });

if (leftovers.length > 0) {
    problems.push(
        `CSS Modules are gone from this kit, but ${leftovers.length} remain: ${leftovers.join(", ")}`,
    );
}

if (problems.length > 0) {
    console.error("The shipped styles are not right:\n");

    for (const problem of problems) console.error(`  - ${problem}`);

    process.exit(1);
}

console.log("package/dist/styles.css ships the theme tokens and keyframes.");
