// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(
          __dirname,
          "src/index.html"
        ),
        bestil: resolve(
          __dirname,
          "src/bestil.html"
        ),

        support: resolve(
          __dirname,
          "src/support.html"
        ),
        guide: resolve(
          __dirname,
          "src/guide.html"
        ),
        omos: resolve(
          __dirname,
          "src/omos.html"
        ),
        login: resolve(
          __dirname,
          "src/login.html"
        ),
        nylogin: resolve(
          __dirname,
          "src/nylogin.html"
        ),
        sitemap: resolve(
          __dirname,
          "src/sitemap.html"
        ),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
