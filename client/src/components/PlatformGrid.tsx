import { useTranslation } from 'react-i18next';
import { getAllPlatforms } from '../lib/platform-detection';
import { apiRequest } from '../lib/queryClient';

export default function PlatformGrid() {
  const { t } = useTranslation();
  const platforms = getAllPlatforms(t);
  
  const handleDownload = async (platform: string, downloadUrl: string) => {
    try {
      // Track download event
      await apiRequest('POST', '/api/downloads', {
        platform,
        language: t('common.currentLanguage'),
        userAgent: navigator.userAgent,
      });
      
      // Open download link
      window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error('Download tracking failed:', error);
      // Still proceed with download
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <section id="platforms-section" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('platforms.title')}</h2>
          <p className="text-gray-600 text-lg">{t('platforms.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => (
            <div key={platform.platform} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${platform.icon} text-green-600 text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{platform.requirements}</p>
              <button 
                onClick={() => handleDownload(platform.platform, platform.downloadUrl)}
                className="w-full line-green text-white py-3 rounded-lg hover:bg-line-dark transition-colors font-medium"
              >
                <i className={`${platform.storeIcon} mr-2`}></i>
                {t('platforms.downloadButton')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
