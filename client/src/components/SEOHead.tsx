import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage = "/og-image.svg"
}: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  
  const pageTitle = title || t('seo.title');
  const pageDescription = description || t('seo.description');
  const pageKeywords = keywords || t('seo.keywords');
  
  // Enhanced keywords based on popular searches
  const enhancedKeywords = [
    pageKeywords,
    // High-volume Japanese keywords
    'LINE ダウンロード', 'ライン ダウンロード', 'LINE アプリ ダウンロード', 'LINE 無料 ダウンロード',
    'LINE インストール', 'ライン インストール', 'LINE PC ダウンロード', 'LINE スマホ ダウンロード',
    // Popular English keywords  
    'LINE app download', 'LINE messenger download', 'LINE free download', 'download LINE app',
    'LINE mobile app', 'LINE desktop download', 'LINE PC download', 'LINE install',
    // Korean keywords (secondary market)
    '라인 다운로드', '라인 앱 다운로드', '라인 설치', '라인 무료 다운로드',
    // Thai keywords (major market)
    'ดาวน์โหลด LINE', 'ดาวน์โหลดแอป LINE', 'LINE ดาวน์โหลดฟรี',
    // Indonesian keywords (major market) 
    'download LINE', 'download aplikasi LINE', 'LINE download gratis',
    // Traditional Chinese keywords (Taiwan market)
    'LINE 下載', 'LINE 應用程式下載', 'LINE 免費下載'
  ].join(', ');
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://download-line.com';
  const siteName = 'LINE Download - 라인 다운로드 - LINEダウンロード';

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="LINE Download Team" />
      <meta name="publisher" content="Download-LINE.com" />
      <meta name="application-name" content="LINE Download Guide" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="LINE Download" />
      <meta name="theme-color" content="#06C755" />
      <meta name="msapplication-TileColor" content="#06C755" />
      <meta name="msapplication-navbutton-color" content="#06C755" />
      
      {/* Geographic and Language Targeting */}
      <meta name="geo.region" content="JP" />
      <meta name="geo.country" content="JP" />
      <meta name="language" content={i18n.language} />
      <meta httpEquiv="content-language" content={i18n.language} />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="LINE App Download Guide" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={i18n.language === 'ja' ? 'ja_JP' : i18n.language === 'ko' ? 'ko_KR' : i18n.language === 'th' ? 'th_TH' : i18n.language === 'id' ? 'id_ID' : i18n.language === 'tw' ? 'zh_TW' : i18n.language === 'zh' ? 'zh_CN' : 'en_US'} />
      <meta property="article:author" content="LINE Download Team" />
      <meta property="article:publisher" content="https://download-line.com" />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="LINE App Download Guide" />
      <meta name="twitter:site" content="@LINE_official" />
      <meta name="twitter:creator" content="@LINE_official" />
      
      {/* Canonical and Alternate URLs */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="ja" href="https://download-line.com/" />
      <link rel="alternate" hrefLang="en" href="https://download-line.com/en" />
      <link rel="alternate" hrefLang="ko" href="https://download-line.com/ko" />
      <link rel="alternate" hrefLang="zh-CN" href="https://download-line.com/zh" />
      <link rel="alternate" hrefLang="th" href="https://download-line.com/th" />
      <link rel="alternate" hrefLang="id" href="https://download-line.com/id" />
      <link rel="alternate" hrefLang="zh-TW" href="https://download-line.com/tw" />
      <link rel="alternate" hrefLang="x-default" href="https://download-line.com/" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'LINE',
            description: pageDescription,
            url: 'https://line.me/',
            applicationCategory: 'Communication',
            operatingSystem: 'iOS, Android, Windows, macOS',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            author: {
              '@type': 'Organization',
              name: 'LINE Corporation',
              url: 'https://linecorp.com/'
            },
            downloadUrl: [
              'https://apps.apple.com/app/line/id443904275',
              'https://play.google.com/store/apps/details?id=jp.naver.line.android',
              'https://apps.microsoft.com/detail/xpfcc4cd725961'
            ],
            screenshot: ogImage,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '10000000'
            }
          })
        }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            url: 'https://download-line.com',
            logo: 'https://download-line.com/line-icon.svg',
            sameAs: [
              'https://line.me/',
              'https://twitter.com/LINE_official',
              'https://www.facebook.com/line.official'
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: 'https://download-line.com',
            description: pageDescription,
            inLanguage: [
              { '@type': 'Language', name: 'Japanese', alternateName: 'ja' },
              { '@type': 'Language', name: 'English', alternateName: 'en' },
              { '@type': 'Language', name: 'Korean', alternateName: 'ko' },
              { '@type': 'Language', name: 'Chinese (Simplified)', alternateName: 'zh' },
              { '@type': 'Language', name: 'Thai', alternateName: 'th' },
              { '@type': 'Language', name: 'Indonesian', alternateName: 'id' },
              { '@type': 'Language', name: 'Chinese (Traditional)', alternateName: 'tw' }
            ],
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://download-line.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
    </>
  );
}
