import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { detectPlatform, getPlatformInfo, type Platform } from '../lib/platform-detection';
import { apiRequest } from '../lib/queryClient';

export default function HeroSection() {
  const { t } = useTranslation();
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>('windows');
  
  useEffect(() => {
    const platform = detectPlatform();
    setDetectedPlatform(platform);
  }, []);
  
  const platformInfo = getPlatformInfo(detectedPlatform, t);
  
  const handleDownload = () => {
    // Smooth scroll to platforms section
    const platformsSection = document.getElementById('platforms-section');
    if (platformsSection) {
      platformsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-line-green to-line-light text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title.main')}<br />
              <span className="text-green-100">{t('hero.title.highlight')}</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Platform Detection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-green-100 text-sm mb-4">
                <i className="fas fa-mobile-alt mr-2"></i>
                {t('hero.detectedDevice')}: <span className="font-semibold">{platformInfo.name}</span>
              </p>
              <button 
                onClick={handleDownload}
                className="bg-white text-line-green font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 w-full justify-center"
              >
                <i className={platformInfo.storeIcon + " text-xl"}></i>
                <span>{t(`hero.downloadButton.${detectedPlatform}`)}</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-green-100 flex-wrap">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt"></i>
                <span className="text-sm">{t('hero.trustIndicators.secure')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-download"></i>
                <span className="text-sm">{t('hero.trustIndicators.downloads')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star"></i>
                <span className="text-sm">{t('hero.trustIndicators.rating')}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={t('hero.imageAlt')}
              className="rounded-2xl shadow-2xl mx-auto max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
