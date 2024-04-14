export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    proxy: "http://localhost:5000",
  },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
