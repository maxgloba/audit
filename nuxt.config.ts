import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'color-scheme', content: 'only light' },
        { name: 'theme-color', content: '#1E3A8A' },
        { name: 'msapplication-TileColor', content: '#1E3A8A' }
      ],
      script: [],
    },
  },
  plugins: ['~/plugins/maska', '~/plugins/fontawesome'],
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    'nuxt-viewport',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        'Roboto Condensed': true,
        'Source Serif 4': true,
      }
    }],
  ],
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    },
  },
  imports: { dirs: ['stores'] },
  viewport: {
    breakpoints: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/styles.css'],
  compatibilityDate: '2025-07-16',
  hooks: {
    'builder:watch'(event) {
      console.log(event);
    }
  },
  typescript: {
    typeCheck: false,
    strict: false
  },
  // nitro: {
  //   preset: 'static'
  // },
})
