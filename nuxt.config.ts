import type { ModuleOptions } from 'nuxt/schema'
import i18n from './i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      title: 'Saraf App',
    },
  },
  css: [
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css',
    'primevue/resources/themes/aura-light-blue/theme.css',
    '~/styles/main.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    'nuxt-primevue',
  ],

  i18n: i18n as ModuleOptions,

  fonts: {
    provider: 'bunny',
  },
})
