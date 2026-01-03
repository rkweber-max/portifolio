// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@vueuse/nuxt"],

  css: ["~/assets/css/main.css"],

  ssr: false,

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Portfolio Website",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
