import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  envDir: "./env",
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [
    react(),
    VitePWA({ registerType: "autoUpdate", manifest: false, injectRegister: "auto" }),
    svgr({ svgrOptions: { icon: true } }),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
