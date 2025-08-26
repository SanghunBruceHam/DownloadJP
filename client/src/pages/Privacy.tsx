import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('privacy.seo.title')}
        description={t('privacy.seo.description')}
        keywords={t('privacy.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 line-green rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('privacy.lastUpdated')}: 2025年1月1日
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 space-y-8">
              
              {/* Overview */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  {t('privacy.overview.title')}
                </h2>
                <p className="text-green-700">
                  {t('privacy.overview.content')}
                </p>
              </div>

              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.dataCollection.title')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('privacy.dataCollection.noPersonalData.title')}</h3>
                      <p className="text-gray-600">{t('privacy.dataCollection.noPersonalData.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('privacy.dataCollection.noCookies.title')}</h3>
                      <p className="text-gray-600">{t('privacy.dataCollection.noCookies.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('privacy.dataCollection.noTracking.title')}</h3>
                      <p className="text-gray-600">{t('privacy.dataCollection.noTracking.description')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Third Party Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.thirdParty.title')}
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{t('privacy.thirdParty.hosting.title')}</h3>
                    <p className="text-gray-600 mb-2">{t('privacy.thirdParty.hosting.description')}</p>
                    <a 
                      href="https://www.cloudflare.com/privacy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {t('privacy.thirdParty.hosting.link')} →
                    </a>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{t('privacy.thirdParty.appStores.title')}</h3>
                    <p className="text-gray-600">{t('privacy.thirdParty.appStores.description')}</p>
                  </div>
                </div>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.security.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <i className="fas fa-lock text-green-600 text-xl mr-3"></i>
                    <div>
                      <h3 className="font-semibold text-green-800">{t('privacy.security.https.title')}</h3>
                      <p className="text-green-700 text-sm">{t('privacy.security.https.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <i className="fas fa-server text-blue-600 text-xl mr-3"></i>
                    <div>
                      <h3 className="font-semibold text-blue-800">{t('privacy.security.static.title')}</h3>
                      <p className="text-blue-700 text-sm">{t('privacy.security.static.description')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.externalLinks.title')}
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <i className="fas fa-external-link-alt text-yellow-600 mt-1 mr-3"></i>
                    <div className="text-yellow-800">
                      <p>{t('privacy.externalLinks.description')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Legal Compliance */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.legalCompliance.title')}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>{t('privacy.legalCompliance.gdpr')}</p>
                  <p>{t('privacy.legalCompliance.japan')}</p>
                  <p>{t('privacy.legalCompliance.children')}</p>
                </div>
              </section>

              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.updates.title')}
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">{t('privacy.updates.description')}</p>
                  <p className="text-sm text-gray-600">{t('privacy.updates.notification')}</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('privacy.contact.title')}
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-3">{t('privacy.contact.description')}</p>
                  <div className="flex items-center text-blue-700">
                    <i className="fas fa-envelope mr-2"></i>
                    <code className="bg-blue-100 px-2 py-1 rounded">
                      privacy@download-guide.com
                    </code>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}