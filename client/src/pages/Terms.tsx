import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('terms.seo.title')}
        description={t('terms.seo.description')}
        keywords={t('terms.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 line-green rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-file-contract text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('terms.lastUpdated')}: 2025年1月1日
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 space-y-8">
              
              {/* Acceptance */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.acceptance.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.acceptance.content')}
                </p>
              </section>

              {/* Service Description */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.service.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">{t('terms.service.description')}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <i className="fas fa-heart text-green-600 mt-1 mr-3"></i>
                      <div className="text-green-800">
                        <p className="font-semibold mb-2">{t('terms.service.mission.title')}</p>
                        <p>{t('terms.service.mission.content')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.disclaimer.title')}
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-3 flex-shrink-0"></i>
                    <div className="text-yellow-800 space-y-2">
                      <p className="font-semibold">{t('terms.disclaimer.independence.title')}</p>
                      <p>{t('terms.disclaimer.independence.content')}</p>
                      <p className="font-semibold mt-4">{t('terms.disclaimer.accuracy.title')}</p>
                      <p>{t('terms.disclaimer.accuracy.content')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.userResponsibilities.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">{t('terms.userResponsibilities.description')}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{t('terms.userResponsibilities.allowed.title')}</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• {t('terms.userResponsibilities.allowed.item1')}</li>
                        <li>• {t('terms.userResponsibilities.allowed.item2')}</li>
                        <li>• {t('terms.userResponsibilities.allowed.item3')}</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{t('terms.userResponsibilities.prohibited.title')}</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• {t('terms.userResponsibilities.prohibited.item1')}</li>
                        <li>• {t('terms.userResponsibilities.prohibited.item2')}</li>
                        <li>• {t('terms.userResponsibilities.prohibited.item3')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.intellectualProperty.title')}
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-2">{t('terms.intellectualProperty.content.title')}</h3>
                    <p className="text-blue-700">{t('terms.intellectualProperty.content.description')}</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="font-semibold text-purple-800 mb-2">{t('terms.intellectualProperty.trademarks.title')}</h3>
                    <p className="text-purple-700">{t('terms.intellectualProperty.trademarks.description')}</p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.liability.title')}
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3 text-gray-700">
                    <p>{t('terms.liability.noWarranty')}</p>
                    <p>{t('terms.liability.limitation')}</p>
                    <p>{t('terms.liability.thirdParty')}</p>
                  </div>
                </div>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.externalLinks.title')}
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <i className="fas fa-external-link-alt text-blue-600 mt-1 mr-3"></i>
                    <div className="text-blue-800">
                      <p>{t('terms.externalLinks.description')}</p>
                      <p className="mt-2 text-sm">{t('terms.externalLinks.responsibility')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Modification */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.modification.title')}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>{t('terms.modification.right')}</p>
                  <p>{t('terms.modification.notification')}</p>
                </div>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.termination.title')}
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <i className="fas fa-ban text-red-600 mt-1 mr-3"></i>
                    <div className="text-red-800 space-y-2">
                      <p>{t('terms.termination.right')}</p>
                      <p>{t('terms.termination.effect')}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.governingLaw.title')}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>{t('terms.governingLaw.jurisdiction')}</p>
                  <p>{t('terms.governingLaw.disputes')}</p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.changes.title')}
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">{t('terms.changes.description')}</p>
                  <p className="text-sm text-gray-600">{t('terms.changes.notification')}</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.contact.title')}
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-800 mb-3">{t('terms.contact.description')}</p>
                  <div className="flex items-center text-green-700">
                    <i className="fas fa-envelope mr-2"></i>
                    <code className="bg-green-100 px-2 py-1 rounded">
                      legal@download-guide.com
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