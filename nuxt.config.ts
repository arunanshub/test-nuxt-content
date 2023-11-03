// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from "@tailwindcss/typography";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  experimental: {
    componentIslands: true,
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  content: {
    highlight: {
      theme: "github-light",
      preload: ["python", "rust"],
    },
  },

  // CSS and fonts
  postcss: {
    plugins: {
      "postcss-preset-env": true,
      cssnano: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    },
  },

  tailwindcss: {
    exposeConfig: true,
    config: {
      plugins: [tailwindTypography],
    },
  },

  nitro: {
    compressPublicAssets: { brotli: true, gzip: true },
    minify: true,
    future: { nativeSWR: true },
  },
  vite: {
    esbuild: {
      legalComments: "none",
      target: browserslistToEsbuild(),
    },
  },
  routeRules: {
    "/": { swr: true },
    "/info/**": { static: true },
  },
});
