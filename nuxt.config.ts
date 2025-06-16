import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/audit/',
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'color-scheme', content: 'only light' },
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
    provider: 'static',
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
  nitro: {
    preset: 'static'
  },
})
