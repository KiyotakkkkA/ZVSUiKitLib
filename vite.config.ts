import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "src/ui/index.ts"),
            name: "ZvsUiKit",
            formats: ["es"],
            fileName: () => "index.js",
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
