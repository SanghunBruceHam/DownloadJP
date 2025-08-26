import { useTranslation } from 'react-i18next';
import AdBanner from './AdBanner';
import { getPlatformInfo, type Platform } from '../lib/platform-detection';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const downloadPlatforms: Platform[] = ['android', 'ios', 'windows', 'mac'];
  const languages = [
    { code: 'ja', name: '🇯🇵 日本語' },
    { code: 'en', name: '🇺🇸 English' },
    { code: 'ko', name: '🇰🇷 한국어' },
    { code: 'zh', name: '🇨🇳 中文 (简体)' },
    { code: 'th', name: '🇹🇭 ไทย' },
    { code: 'id', name: '🇮🇩 Bahasa Indonesia' },
    { code: 'tw', name: '🇹🇼 中文 (繁體)' },
  ];

  const handleDownload = (platform: Platform) => {
    const platformInfo = getPlatformInfo(platform, t);
    window.open(platformInfo.downloadUrl, '_blank');
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bottom Ad */}
        <div className="mb-8">
          <AdBanner 
            className="bg-gray-800 rounded-lg p-4"
            slot="1234567891"
            format="horizontal"
            style={{ minHeight: '96px' }}
          />
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 line-green rounded-lg flex items-center justify-center">
                <i className="fab fa-line text-white"></i>
              </div>
              <span className="font-bold text-lg">{t('footer.brand')}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.sections.download')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {downloadPlatforms.map((platform) => (
                <li key={platform}>
                  <button 
                    onClick={() => handleDownload(platform)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t(`footer.links.${platform}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.sections.support')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => window.open('https://help.line.me/', '_blank')}
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.help')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq-section')}
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.faq')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('guide-section')}
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.guide')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('mailto:contact@download-line.com')}
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.sections.language')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {languages.map((language) => (
                <li key={language.code}>
                  <button 
                    onClick={() => handleLanguageChange(language.code)}
                    className={`hover:text-white transition-colors text-left ${
                      i18n.language === language.code ? 'text-white font-medium' : ''
                    }`}
                  >
                    {language.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => window.open('https://line.me/en/terms/', '_blank')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t('footer.legal.privacy')}
            </button>
            <button 
              onClick={() => window.open('https://line.me/en/terms/', '_blank')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t('footer.legal.terms')}
            </button>
            <span className="text-gray-400 text-sm cursor-default">
              {t('footer.legal.disclaimer')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
