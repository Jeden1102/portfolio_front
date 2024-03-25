// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss'],
  runtimeConfig: {
    public: {
      googleApiKey: '',
      apiUrl: '',
    },
  },
  strapi: {
    url: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:1337',
  },
  modules: [
    [
      '@nuxtjs/google-fonts',

      {
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-aos',
    '@nuxtjs/strapi',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
