// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxt/eslint'
  ],
  srcDir: "src/",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    'server': path.resolve(__dirname, './src/server/')
  },
  eslint: {}
})
