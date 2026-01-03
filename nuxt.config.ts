// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true, // keep SSR on; we'll pre-render to static via generate
  app: {
    baseURL: "/", // <-- important
    // Optional but recommended for GitHub Pages:
    // GitHub Pages + Jekyll can ignore folders starting with "_"
    buildAssetsDir: "/assets/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
