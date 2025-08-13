import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore all __tests__ folders and any *setupTests* files
      ignored: ["**/__tests__/**", "**/*setupTests.{ts,tsx,js,jsx}"],
    },
  },
  build: {
    outDir: "dist", // explicit: output goes to dist/
    emptyOutDir: true, // clean dist before each build
    rollupOptions: {
      // Exclude from build: any file in __tests__ dirs OR matching *setupTests*
      external: [/\/__tests__\//, /setupTests\.(t|j)sx?$/],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
