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
      title: "Rodrigo Kunzler Weber | Desenvolvedor Backend / Full Stack",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Desenvolvedor Full Stack com foco em Backend, especializado em PHP, Golang, Java e soluções para o mercado financeiro." },
        { name: "author", content: "Rodrigo Kunzler Weber" },
        { property: "og:title", content: "Rodrigo Kunzler Weber | Desenvolvedor Backend" },
        { property: "og:description", content: "Portfolio de desenvolvedor Full Stack especializado em Backend" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
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
