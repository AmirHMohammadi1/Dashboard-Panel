import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: [
    "~/assets/main.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
