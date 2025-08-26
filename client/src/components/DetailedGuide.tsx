import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Guide image component with fallback
function GuideImage({ 
  src, 
  alt, 
  className = "w-full h-48 object-cover rounded-lg mb-4" 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
}) {
  return (
    <div className={`${className} bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center`}>
      <div className="text-center p-4">
        <i className="fas fa-image text-gray-400 text-3xl mb-2"></i>
        <p className="text-gray-500 text-sm font-medium">{alt}</p>
        <p className="text-gray-400 text-xs mt-1">이미지 준비 중</p>
      </div>
    </div>
  );
}

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
    <section id="guide-section" className="py-16 bg-white">
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
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Mobile Installation */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-mobile-alt text-line-green mr-2"></i>
                    {t('guide.installation.mobile.title')}
                  </h3>
                  
                  {/* Mobile Screenshots */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <GuideImage 
                      src="/images/guide/mobile-playstore.png" 
                      alt="Google Play Store"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                    <GuideImage 
                      src="/images/guide/mobile-appstore.png" 
                      alt="Apple App Store"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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
                
                {/* Desktop Installation */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-desktop text-line-green mr-2"></i>
                    {t('guide.installation.desktop.title')}
                  </h3>
                  
                  {/* Desktop Screenshots */}
                  <div className="mb-4">
                    <GuideImage 
                      src="/images/guide/desktop-download.png" 
                      alt="Desktop Download Page"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2"
                    />
                    <GuideImage 
                      src="/images/guide/desktop-installer.png" 
                      alt="Installer Process"
                      className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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

                {/* Installation Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                    설치 팁
                  </h4>
                  
                  <GuideImage 
                    src="/images/guide/installation-tips.png" 
                    alt="Installation Tips"
                    className="h-24 bg-blue-100 rounded-lg flex items-center justify-center mb-3"
                  />
                  
                  <div className="space-y-2 text-blue-700 text-sm">
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                      <p>안정적인 Wi-Fi 연결 상태에서 설치하세요</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                      <p>충분한 저장 공간을 확보하세요 (최소 100MB)</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                      <p>최신 운영체제에서 설치를 권장합니다</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'usage' && (
            <div className="space-y-8">
              {/* Usage Overview */}
              <div className="text-center mb-8">
                <GuideImage 
                  src="/images/guide/line-main-interface.png" 
                  alt="LINE Main Interface"
                  className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mx-auto max-w-md"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {['basic', 'chat', 'calls'].map((section) => (
                  <div key={section}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className={`fas fa-${section === 'basic' ? 'rocket' : section === 'chat' ? 'comments' : 'phone'} text-line-green mr-2`}></i>
                      {t(`guide.usage.${section}.title`)}
                    </h3>
                    
                    {/* Feature Screenshots */}
                    <div className="mb-4">
                      <GuideImage 
                        src={`/images/guide/${section}-features.png`} 
                        alt={`${section} features`}
                        className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                      />
                    </div>
                    
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

              {/* Usage Video Placeholder */}
              <div className="bg-gradient-to-r from-line-green to-line-light rounded-lg p-8 text-center text-white">
                <div className="mb-4">
                  <GuideImage 
                    src="/images/guide/usage-video-thumbnail.png" 
                    alt="Usage Video Tutorial"
                    className="h-32 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center mx-auto max-w-md"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">📹 동영상 가이드</h4>
                <p className="text-green-100 mb-4">LINE의 모든 기능을 동영상으로 배워보세요</p>
                <button className="bg-white text-line-green px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  <i className="fas fa-play mr-2"></i>
                  동영상 보기 (준비 중)
                </button>
              </div>
            </div>
          )}

          {activeCategory === 'login' && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* New User Registration */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-user-plus text-line-green mr-2"></i>
                    {t('guide.login.newUser.title')}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <GuideImage 
                      src="/images/guide/signup-step1.png" 
                      alt="Sign up Step 1"
                      className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                    <GuideImage 
                      src="/images/guide/signup-step2.png" 
                      alt="Sign up Step 2"
                      className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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
                
                {/* Existing User Login */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-sign-in-alt text-line-green mr-2"></i>
                    {t('guide.login.existing.title')}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <GuideImage 
                      src="/images/guide/login-screen.png" 
                      alt="Login Screen"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                    <GuideImage 
                      src="/images/guide/login-verification.png" 
                      alt="Login Verification"
                      className="h-20 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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

                {/* QR Code Login */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <i className="fas fa-qrcode text-green-600 mr-2"></i>
                    QR 코드 로그인
                  </h4>
                  
                  <div className="mb-4">
                    <GuideImage 
                      src="/images/guide/qr-login.png" 
                      alt="QR Code Login"
                      className="h-32 bg-green-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
                  <div className="space-y-2 text-green-700 text-sm">
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-mobile-alt text-green-500 mt-0.5"></i>
                      <p>모바일 앱에서 QR 코드 스캔</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-desktop text-green-500 mt-0.5"></i>
                      <p>PC에서 즉시 로그인 완료</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-shield-alt text-green-500 mt-0.5"></i>
                      <p>안전하고 빠른 로그인 방법</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'themes' && (
            <div className="space-y-8">
              {/* Theme Gallery */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎨 테마 갤러리</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <GuideImage 
                    src="/images/guide/theme-default.png" 
                    alt="Default Theme"
                    className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                  />
                  <GuideImage 
                    src="/images/guide/theme-dark.png" 
                    alt="Dark Theme"
                    className="h-24 bg-gray-900 rounded-lg flex items-center justify-center"
                  />
                  <GuideImage 
                    src="/images/guide/theme-colorful.png" 
                    alt="Colorful Theme"
                    className="h-24 bg-gradient-to-br from-pink-200 to-blue-200 rounded-lg flex items-center justify-center"
                  />
                  <GuideImage 
                    src="/images/guide/theme-seasonal.png" 
                    alt="Seasonal Theme"
                    className="h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Theme Change Guide */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-paint-brush text-line-green mr-2"></i>
                    {t('guide.themes.change.title')}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <GuideImage 
                      src="/images/guide/theme-settings-menu.png" 
                      alt="Theme Settings Menu"
                      className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                    <GuideImage 
                      src="/images/guide/theme-selection.png" 
                      alt="Theme Selection Screen"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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
                
                {/* Custom Theme Download */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-download text-line-green mr-2"></i>
                    {t('guide.themes.custom.title')}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <GuideImage 
                      src="/images/guide/line-store.png" 
                      alt="LINE Store"
                      className="h-32 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                    <GuideImage 
                      src="/images/guide/theme-download.png" 
                      alt="Theme Download Process"
                      className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
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

                {/* Theme Tips */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <i className="fas fa-lightbulb text-purple-600 mr-2"></i>
                    {t('guide.themes.tips.title')}
                  </h4>
                  
                  <div className="mb-4">
                    <GuideImage 
                      src="/images/guide/theme-tips.png" 
                      alt="Theme Tips"
                      className="h-24 bg-purple-100 rounded-lg flex items-center justify-center"
                    />
                  </div>
                  
                  <div className="space-y-2 text-purple-700 text-sm">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <i className="fas fa-star text-yellow-500 mt-1"></i>
                        <p>{t(`guide.themes.tips.tip${i + 1}`)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Popular Themes */}
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-2">🔥 인기 테마</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <GuideImage 
                        src="/images/guide/theme-popular1.png" 
                        alt="Popular Theme 1"
                        className="h-16 bg-purple-100 rounded flex items-center justify-center"
                      />
                      <GuideImage 
                        src="/images/guide/theme-popular2.png" 
                        alt="Popular Theme 2"
                        className="h-16 bg-purple-100 rounded flex items-center justify-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}