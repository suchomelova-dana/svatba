// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true, // keep SSR on; we'll pre-render to static via generate
  app: {
    baseURL: "/",
    buildAssetsDir: "/assets/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/google-fonts"],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  googleFonts: {
    families: {
      "Cormorant Garamond": [300,400, 500, 600, 700],
      // Roboto: true, // shortcut for all weights
    },
    display: "swap",
    preconnect: true,
    preload: true,
  },
});
