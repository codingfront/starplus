import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";
import replace from "@rollup/plugin-replace";

const replaceOptions = { __DATE__: new Date().toISOString(), preventAssignment: true };

// https://vite.dev/config/
export default defineConfig({
  envDir: "./env",
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      manifest: false,
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/images/genres/"),
            handler: "CacheFirst",
            options: {
              cacheName: "specific-image-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    replace(replaceOptions),
    svgr({ svgrOptions: { icon: true }, include: "**/*.svg" }),
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
