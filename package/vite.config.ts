import { resolve } from "node:path";
import { createRequire } from "node:module";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
const pkg = require("./package.json") as {
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
};

const externalPackages = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
];

const isExternal = (id: string) =>
    externalPackages.some(
        (pkgName) => id === pkgName || id.startsWith(`${pkgName}/`),
    );

const CLIENT_ENTRIES = new Set(["index", "chart", "code-view"]);

const CSS_LAYER_NAME = "zvs-uikit";
const CSS_BASE_NAME = "zvs-uikit-lib";

/**
 * At-rules that must stay outside the cascade layer. `@import` and `@charset`
 * are only valid at the top of a stylesheet, and `@property` registration
 * inside `@layer` is not reliable across browsers — the custom properties
 * Tailwind registers are global anyway, so layering them buys nothing.
 */
const HOISTED_AT_RULES =
    /@(?:charset\s+[^;]+;|import\s+[^;]+;|property\s+--[\w-]+\s*\{[^}]*\})/g;

/**
 * Emits a second copy of the stylesheet wrapped in a cascade layer.
 *
 * The two files exist because one file cannot be both easy to override and
 * impossible to break by accident:
 *
 * - `zvs-uikit-lib.css` is unlayered. It outranks Tailwind's `@layer
 *   utilities`, so overriding a component needs `!important` — but nothing in
 *   the consumer's stylesheet can strip it.
 * - `zvs-uikit-lib.layered.css` sits in `@layer zvs-uikit`. A plain
 *   `className` then wins without `!important`, at the price of losing to
 *   every unlayered rule in the consumer's CSS, Tailwind's Preflight included.
 *
 * The consumer imports whichever they want; the entry points import neither.
 */
const emitLayeredCss = (): Plugin => ({
    name: "emit-layered-css",
    enforce: "post",
    generateBundle(_options, bundle) {
        const stylesheet = bundle[`${CSS_BASE_NAME}.css`];

        if (
            !stylesheet ||
            stylesheet.type !== "asset" ||
            typeof stylesheet.source !== "string"
        ) {
            return;
        }

        const hoisted: string[] = [];
        const layered = stylesheet.source.replace(
            HOISTED_AT_RULES,
            (match) => {
                hoisted.push(match);
                return "";
            },
        );

        if (!layered.trim()) return;

        this.emitFile({
            type: "asset",
            fileName: `${CSS_BASE_NAME}.layered.css`,
            source: `${hoisted.join("")}@layer ${CSS_LAYER_NAME}{${layered}}`,
        });
    },
});

export default defineConfig({
    css: {
        modules: {
            generateScopedName: "zvs_[name]_[local]_[hash:base64:5]",
        },
    },
    build: {
        emptyOutDir: true,
        copyPublicDir: false,
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                chart: resolve(__dirname, "src/chart.ts"),
                "code-view": resolve(__dirname, "src/code-view.ts"),
                server: resolve(__dirname, "src/server.ts"),
                styles: resolve(__dirname, "src/styles.ts"),
            },
            name: "ZvsUiKit",
            formats: ["es"],
            fileName: (_format, entryName) => `${entryName}.js`,
            cssFileName: CSS_BASE_NAME,
        },
        rollupOptions: {
            external: isExternal,
            output: {
                entryFileNames: "[name].js",
            },
        },
    },
    plugins: [
        react(),
        {
            name: "preserve-client-boundary",
            enforce: "post",
            renderChunk(code, chunk) {
                if (chunk.isEntry && CLIENT_ENTRIES.has(chunk.name)) {
                    return { code: `"use client";\n${code}`, map: null };
                }

                return null;
            },
        },
        emitLayeredCss(),
    ],
});
