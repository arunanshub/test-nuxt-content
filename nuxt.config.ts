// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  content: {
    highlight: {
      theme: "github-light",
      preload: ["python", "rust"],
    },
  },

  tailwindcss: {
    exposeConfig: true,
    config: {
      plugins: [tailwindTypography],
    },
  },
})
