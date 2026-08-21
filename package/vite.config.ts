import { resolve } from "node:path";
import { createRequire } from "node:module";
import { defineConfig } from "vite";
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

/**
 * At-rules that must stay outside the cascade layer. `@import` and `@charset`
 * are only valid at the top of a stylesheet, and `@property` registration
 * inside `@layer` is not reliable across browsers — the custom properties
 * Tailwind registers are global anyway, so layering them buys nothing.
 */
const HOISTED_AT_RULES =
    /@(?:charset\s+[^;]+;|import\s+[^;]+;|property\s+--[\w-]+\s*\{[^}]*\})/g;

/**
 * Wraps the emitted stylesheet in a cascade layer.
 *
 * Unlayered CSS always beats layered CSS, whatever the source order. Shipping
 * the library's rules unlayered therefore made them win over Tailwind's
 * utilities, which live in `@layer utilities`, and consumers had to reach for
 * `!important` on every override. Inside a layer of its own the library loses
 * to both Tailwind utilities and plain unlayered app CSS, which is what a
 * consumer expects.
 */
const wrapCssInLayer = () => ({
    name: "wrap-css-in-cascade-layer",
    enforce: "post" as const,
    generateBundle(_options: unknown, bundle: Record<string, unknown>) {
        for (const asset of Object.values(bundle)) {
            const file = asset as {
                type?: string;
                fileName?: string;
                source?: unknown;
            };

            if (
                file.type !== "asset" ||
                !file.fileName?.endsWith(".css") ||
                typeof file.source !== "string"
            ) {
                continue;
            }

            const hoisted: string[] = [];
            const layered = file.source.replace(HOISTED_AT_RULES, (match) => {
                hoisted.push(match);
                return "";
            });

            if (!layered.trim()) continue;

            file.source = `${hoisted.join("")}@layer ${CSS_LAYER_NAME}{${layered}}`;
        }
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
            cssFileName: "zvs-uikit-lib",
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
                    return {
                        code: `"use client";\nimport "./zvs-uikit-lib.css";\n${code}`,
                        map: null,
                    };
                }

                return null;
            },
        },
        wrapCssInLayer(),
    ],
});
