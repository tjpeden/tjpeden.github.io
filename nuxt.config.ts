// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Static site generation
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  image: {
    provider: 'ipx',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['javascript', 'typescript', 'vue', 'css', 'html', 'bash', 'cpp', 'json', 'yaml', 'markdown'],
        },
      },
    },
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/content',
    '@pinia/nuxt'
  ]
})
