import { readFileSync } from "node:fs";
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

/**
 * Copies the one stylesheet the kit still ships into dist.
 *
 * No module imports it — the components carry Tailwind utilities and the
 * consumer imports the stylesheet themselves — so Vite would not otherwise
 * emit it.
 */
const emitStylesheet = () => ({
    name: "emit-stylesheet",
    generateBundle() {
        this.emitFile({
            type: "asset",
            fileName: "styles.css",
            source: readFileSync(resolve(__dirname, "src/styles.css"), "utf8"),
        });
    },
});

export default defineConfig({
    build: {
        emptyOutDir: true,
        copyPublicDir: false,
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                chart: resolve(__dirname, "src/chart.ts"),
                "code-view": resolve(__dirname, "src/code-view.ts"),
                server: resolve(__dirname, "src/server.ts"),
            },
            name: "ZvsUiKit",
            formats: ["es"],
            fileName: (_format, entryName) => `${entryName}.js`,
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
        emitStylesheet(),
    ],
});
