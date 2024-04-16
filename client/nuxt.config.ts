export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
