// @unocss-include
export default {
  lazy: true,
  langDir: 'locales',
  strategy: 'no_prefix',
  defaultLocale: 'ar',
  locale: 'ar',
  fallbackLocale: 'ar',
  locales: [
    {
      code: 'en',
      name: 'English',
      file: 'en.json',
      dir: 'ltr',
      icon: 'i-circle-flags-us',
    },
    {
      code: 'ar',
      name: 'العربية',
      file: 'ar.json',
      dir: 'rtl',
      icon: 'i-circle-flags-ye',
    },
  ],
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    ar: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      },
    },
  },
}
