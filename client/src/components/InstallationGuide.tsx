import { useTranslation } from 'react-i18next';

const steps = [
  { 
    number: 1, 
    key: 'download',
    images: ['/images/guide/android-google-play.png', '/images/guide/ios-app-store.png'],
    icon: 'fas fa-download'
  },
  { 
    number: 2, 
    key: 'account',
    images: [],
    icon: 'fas fa-user-plus'
  },
  { 
    number: 3, 
    key: 'friends',
    images: [],
    icon: 'fas fa-users'
  },
];

export default function InstallationGuide() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('installation.title')}</h2>
          <p className="text-gray-600 text-lg">{t('installation.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 line-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className={step.icon}></i>
              </div>
              
              {/* Step Images */}
              {step.number === 1 && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <img 
                        src="/images/guide/android-google-play.png" 
                        alt="Google Play Store"
                        className="w-full h-16 object-contain rounded"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">Android</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <img 
                        src="/images/guide/ios-app-store.png" 
                        alt="App Store"
                        className="w-full h-16 object-contain rounded"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">iOS</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <img 
                        src="/images/guide/mac-app-store.png" 
                        alt="Mac App Store"
                        className="w-full h-16 object-contain rounded"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">macOS</p>
                    </div>
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t(`installation.steps.${step.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`installation.steps.${step.key}.description`)}
              </p>
              
              {/* Step number indicator */}
              <div className="mt-4 inline-flex items-center justify-center w-8 h-8 bg-line-green/10 text-line-green rounded-full text-sm font-bold">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
