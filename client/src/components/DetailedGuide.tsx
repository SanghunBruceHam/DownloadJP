import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const guideCategories = [
  { icon: 'fas fa-download', key: 'installation' },
  { icon: 'fas fa-play-circle', key: 'usage' },
  { icon: 'fas fa-sign-in-alt', key: 'login' },
  { icon: 'fas fa-palette', key: 'themes' },
];

export default function DetailedGuide() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('installation');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guide.title')}</h2>
          <p className="text-gray-600 text-lg">{t('guide.description')}</p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {guideCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.key
                  ? 'bg-line-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <i className={category.icon}></i>
              <span>{t(`guide.categories.${category.key}`)}</span>
            </button>
          ))}
        </div>

        {/* Guide Content */}
        <div className="bg-gray-50 rounded-xl p-8">
          {activeCategory === 'installation' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-mobile-alt text-line-green mr-2"></i>
                    {t('guide.installation.mobile.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.installation.mobile.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-desktop text-line-green mr-2"></i>
                    {t('guide.installation.desktop.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.installation.desktop.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'usage' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {['basic', 'chat', 'calls'].map((section) => (
                  <div key={section}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className={`fas fa-${section === 'basic' ? 'rocket' : section === 'chat' ? 'comments' : 'phone'} text-line-green mr-2`}></i>
                      {t(`guide.usage.${section}.title`)}
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <i className="fas fa-check-circle text-line-green mt-1"></i>
                          <p>{t(`guide.usage.${section}.tip${i + 1}`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'login' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-user-plus text-line-green mr-2"></i>
                    {t('guide.login.newUser.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.login.newUser.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-sign-in-alt text-line-green mr-2"></i>
                    {t('guide.login.existing.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.login.existing.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'themes' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-paint-brush text-line-green mr-2"></i>
                    {t('guide.themes.change.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.themes.change.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-download text-line-green mr-2"></i>
                    {t('guide.themes.custom.title')}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="bg-line-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{t(`guide.themes.custom.step${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <i className="fas fa-lightbulb text-blue-600 mr-2"></i>
                  {t('guide.themes.tips.title')}
                </h4>
                <div className="space-y-2 text-blue-700">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <i className="fas fa-star text-yellow-500 mt-1"></i>
                      <p>{t(`guide.themes.tips.tip${i + 1}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}