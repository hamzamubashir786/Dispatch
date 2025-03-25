import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Make sure it's set correctly
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensures assets are in a separate folder
  }
});
