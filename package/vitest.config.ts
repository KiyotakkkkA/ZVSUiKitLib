import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        root: import.meta.dirname,
        environment: "node",
        include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    },
});
