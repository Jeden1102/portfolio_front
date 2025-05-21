// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 3001,
  },
  css: ['~/assets/css/main.scss'],
  runtimeConfig: {
    public: {
      API_URL: '',
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pl', name: 'Polski', file: 'pl.json' },
    ],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    provider: 'ipx',
  },
})
