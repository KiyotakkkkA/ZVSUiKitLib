import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
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
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "react/jsx-dev-runtime",
                "@iconify/react",
                "clsx",
                "tailwind-merge",
            ],
        },
    },
});
