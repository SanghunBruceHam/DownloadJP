import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ja from '../locales/ja.json';
import en from '../locales/en.json';
import ko from '../locales/ko.json';
import zh from '../locales/zh.json';
import th from '../locales/th.json';
import id from '../locales/id.json';
import tw from '../locales/tw.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      en: { translation: en },
      ko: { translation: ko },
      zh: { translation: zh },
      th: { translation: th },
      id: { translation: id },
      tw: { translation: tw },
    },
    lng: 'ja', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
