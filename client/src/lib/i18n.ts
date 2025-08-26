import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Use dynamic imports to avoid JSON parsing issues during build
const loadTranslations = async () => {
  try {
    const [ja, en, ko, zh, th, id, tw] = await Promise.all([
      import('../locales/ja.json').then(m => m.default),
      import('../locales/en.json').then(m => m.default),
      import('../locales/ko.json').then(m => m.default),
      import('../locales/zh.json').then(m => m.default),
      import('../locales/th.json').then(m => m.default),
      import('../locales/id.json').then(m => m.default),
      import('../locales/tw.json').then(m => m.default),
    ]);

    return {
      ja: { translation: ja },
      en: { translation: en },
      ko: { translation: ko },
      zh: { translation: zh },
      th: { translation: th },
      id: { translation: id },
      tw: { translation: tw },
    };
  } catch (error) {
    console.error('Failed to load translations:', error);
    // Fallback minimal translations
    return {
      ja: { translation: { common: { currentLanguage: 'ja' } } },
      en: { translation: { common: { currentLanguage: 'en' } } },
      ko: { translation: { common: { currentLanguage: 'ko' } } },
      zh: { translation: { common: { currentLanguage: 'zh' } } },
      th: { translation: { common: { currentLanguage: 'th' } } },
      id: { translation: { common: { currentLanguage: 'id' } } },
      tw: { translation: { common: { currentLanguage: 'tw' } } },
    };
  }
};

// Initialize i18n with async resource loading
const initI18n = async () => {
  const resources = await loadTranslations();
  
  return i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ja', // default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
};

// Initialize immediately
initI18n().catch(console.error);

export default i18n;
