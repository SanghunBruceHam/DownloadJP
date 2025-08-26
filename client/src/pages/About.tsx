import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        keywords={t('about.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 line-green rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('about.mission.title')}
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>{t('about.mission.description')}</p>
              <p className="text-center text-lg font-medium text-line-green italic mt-6">
                "{t('about.mission.quote')}"
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('about.goals.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="text-center">
                  <div className="w-12 h-12 line-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`about.goals.goal${num}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`about.goals.goal${num}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <i className="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-3"></i>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  {t('about.disclaimer.title')}
                </h3>
                <div className="text-yellow-700 space-y-2">
                  <p>{t('about.disclaimer.line1')}</p>
                  <p>{t('about.disclaimer.line2')}</p>
                  <p>{t('about.disclaimer.line3')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('about.community.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('about.community.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <i className="fas fa-globe-asia mr-2"></i>
                <span>{t('about.community.multilingual')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-users mr-2"></i>
                <span>{t('about.community.userFocused')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-shield-alt mr-2"></i>
                <span>{t('about.community.safe')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}