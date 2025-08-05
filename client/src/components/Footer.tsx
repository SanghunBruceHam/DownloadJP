import { useTranslation } from 'react-i18next';
import AdBanner from './AdBanner';

export default function Footer() {
  const { t } = useTranslation();

  const downloadLinks = ['android', 'ios', 'windows', 'mac', 'web'];
  const supportLinks = ['help', 'faq', 'guide', 'contact'];
  const languages = [
    { code: 'ja', name: '🇯🇵 日本語' },
    { code: 'en', name: '🇺🇸 English' },
    { code: 'ko', name: '🇰🇷 한국어' },
    { code: 'zh', name: '🇨🇳 中文' },
  ];

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
              {downloadLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.sections.support')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.sections.language')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {languages.map((language) => (
                <li key={language.code}>
                  <a href="#" className="hover:text-white transition-colors">
                    {language.name}
                  </a>
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
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.legal.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.legal.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.legal.disclaimer')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
