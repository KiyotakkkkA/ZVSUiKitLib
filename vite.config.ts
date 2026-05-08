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

export default defineConfig({
    plugins: [react()],
    build: {
        emptyOutDir: true,
        copyPublicDir: false,
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                ui: resolve(__dirname, "src/ui/index.ts"),
                hooks: resolve(__dirname, "src/hooks/index.ts"),
                providers: resolve(__dirname, "src/providers/index.ts"),
            },
            name: "ZvsUiKit",
            formats: ["es"],
            fileName: (_format, entryName) => `${entryName}.js`,
        },
        rollupOptions: {
            external: isExternal,
        },
    },
});
