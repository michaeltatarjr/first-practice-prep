/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/first-practice-prep/" : "/",
  server: {
    port: 5282,
    strictPort: true,
  },
  preview: {
    port: 5282,
    strictPort: true,
  },
  plugins: [
    react(),
    ...(command === "build"
      ? [
          VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            includeAssets: ["favicon.png", "apple-touch-icon.png"],
            manifest: {
              id: "/first-practice-prep/",
              name: "First Practice Prep",
              short_name: "Hoops Prep",
              description: "Three-week basketball checklist leading to the first team practice.",
              theme_color: "#1a1410",
              background_color: "#14100c",
              display: "standalone",
              start_url: "./",
              scope: "./",
              icons: [
                {
                  src: "icons/icon-192.png",
                  sizes: "192x192",
                  type: "image/png",
                },
                {
                  src: "icons/icon-512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable",
                },
              ],
            },
            workbox: {
              globPatterns: ["**/*.{js,css,html,png,svg,webmanifest}"],
            },
          }),
        ]
      : []),
  ],
  test: {
    environment: "node",
  },
}));
