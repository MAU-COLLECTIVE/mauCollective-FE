import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('../locales/en.json')
    },
    vn: {
      translations: require('../locales/vn.json')
    },
    jp: {
      translations: require('../locales/jp.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['en', 'vn'];

export default i18next;