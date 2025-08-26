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
  
  // Japanese-focused keywords with multilingual support
  const enhancedKeywords = [
    // PRIMARY: High-volume Japanese keywords (70% weight)
    'LINE ダウンロード', 'ライン ダウンロード', 'LINE アプリ ダウンロード', 'LINE 無料 ダウンロード',
    'LINE インストール', 'ライン インストール', 'LINE PC ダウンロード', 'LINE スマホ ダウンロード',
    'LINE iPhone ダウンロード', 'LINE Android ダウンロード', 'LINE Windows ダウンロード', 'LINE Mac ダウンロード',
    'LINE 最新版', 'ライン 最新版', 'LINE アプリ 2025', 'LINE メッセージアプリ', 'LINE 無料通話',
    'LINE スタンプ', 'ライン アプリ', 'LINE 日本', 'LINE 公式', 'LINE 安全',
    pageKeywords,
    // SECONDARY: Other languages for discovery (30% weight)
    'LINE app download', 'LINE messenger download', 'LINE free download', 'download LINE app',
    '라인 다운로드', '라인 앱 다운로드', 'ดาวน์โหลด LINE', 'download LINE',
    'LINE 下載', 'LINE 응용 프로그램', 'LINE تحميل', 'LINE डाउनलोड'
  ].join(', ');
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://download-line.com';
  const siteName = 'LINEダウンロード - LINE Download - 라인 다운로드';

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      
      {/* Enhanced SEO Meta Tags - Japanese Focus */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="LINEダウンロードガイド" />
      <meta name="publisher" content="Download-LINE.com - LINEダウンロード公式ガイド" />
      <meta name="application-name" content="LINEダウンロードガイド" />
      <meta name="apple-mobile-web-app-title" content="LINEダウンロード" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#06C755" />
      <meta name="msapplication-TileColor" content="#06C755" />
      <meta name="msapplication-navbutton-color" content="#06C755" />
      
      {/* Japanese SEO Enhancement */}
      <meta name="classification" content="コミュニケーションアプリ, メッセージングアプリ, LINE, ライン" />
      <meta name="category" content="アプリダウンロード, ソフトウェア, コミュニケーション" />
      <meta name="subject" content="LINEアプリの無料ダウンロード方法とインストールガイド" />
      
      {/* Geographic and Language Targeting - Japan Primary */}
      <meta name="geo.region" content="JP" />
      <meta name="geo.country" content="JP" />
      <meta name="geo.placename" content="Japan" />
      <meta name="language" content="ja" />
      <meta httpEquiv="content-language" content="ja" />
      <meta name="target-country" content="JP" />
      <meta name="target-language" content="ja" />
      
      {/* Current user language */}
      <meta name="user-language" content={i18n.language} />
      
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
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ko_KR" />
      <meta property="og:locale:alternate" content="zh_CN" />
      <meta property="og:locale:alternate" content="th_TH" />
      <meta property="og:locale:alternate" content="id_ID" />
      <meta property="og:locale:alternate" content="zh_TW" />
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
      
      {/* Canonical and Alternate URLs - Japan as default */}
      <link rel="canonical" href="https://download-line.com/" />
      <link rel="alternate" hrefLang="ja" href="https://download-line.com/" />
      <link rel="alternate" hrefLang="ja-JP" href="https://download-line.com/" />
      <link rel="alternate" hrefLang="en" href="https://download-line.com/en" />
      <link rel="alternate" hrefLang="en-US" href="https://download-line.com/en" />
      <link rel="alternate" hrefLang="ko" href="https://download-line.com/ko" />
      <link rel="alternate" hrefLang="ko-KR" href="https://download-line.com/ko" />
      <link rel="alternate" hrefLang="zh-CN" href="https://download-line.com/zh" />
      <link rel="alternate" hrefLang="th" href="https://download-line.com/th" />
      <link rel="alternate" hrefLang="th-TH" href="https://download-line.com/th" />
      <link rel="alternate" hrefLang="id" href="https://download-line.com/id" />
      <link rel="alternate" hrefLang="id-ID" href="https://download-line.com/id" />
      <link rel="alternate" hrefLang="zh-TW" href="https://download-line.com/tw" />
      <link rel="alternate" hrefLang="x-default" href="https://download-line.com/" />
      
      {/* JSON-LD Structured Data - Japanese Focused */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'LINE',
            alternateName: ['ライン', 'LINEアプリ', 'LINEメッセージングアプリ'],
            description: pageDescription,
            url: 'https://line.me/',
            applicationCategory: 'Communication',
            operatingSystem: 'iOS, Android, Windows, macOS',
            inLanguage: ['ja-JP', 'en-US', 'ko-KR', 'zh-CN', 'th-TH', 'id-ID', 'zh-TW'],
            contentLocation: {
              '@type': 'Country',
              name: 'Japan',
              sameAs: 'https://en.wikipedia.org/wiki/Japan'
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'JPY',
              availability: 'https://schema.org/InStock',
              validFrom: '2011-06-23',
              category: 'コミュニケーションアプリ'
            },
            author: {
              '@type': 'Organization',
              name: 'LINE Corporation',
              url: 'https://linecorp.com/',
              sameAs: [
                'https://line.me/',
                'https://twitter.com/LINE_official',
                'https://www.facebook.com/line.official'
              ]
            },
            downloadUrl: [
              'https://apps.apple.com/jp/app/line/id443904275',
              'https://play.google.com/store/apps/details?id=jp.naver.line.android',
              'https://apps.microsoft.com/detail/xpfcc4cd725961'
            ],
            screenshot: ogImage,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '97000000',
              bestRating: '5',
              worstRating: '1'
            },
            review: {
              '@type': 'Review',
              name: 'LINEは日本で最も人気のコミュニケーションアプリです',
              reviewBody: '無料で使えるメッセージングアプリで、日本では9700万人が利用しています。',
              author: {
                '@type': 'Organization',
                name: 'Download-LINE.com'
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5'
              }
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

      {/* Website Schema - Japan Focused */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            alternateName: ['LINEダウンロード公式ガイド', 'LINEアプリダウンロード', 'ラインダウンロード'],
            url: 'https://download-line.com',
            description: pageDescription,
            mainContentOfPage: {
              '@type': 'WebPageElement',
              name: 'LINEアプリのダウンロード方法',
              description: 'スマホやPCでLINEを無料ダウンロードする方法を詳しく解説'
            },
            audience: {
              '@type': 'Audience',
              geographicArea: {
                '@type': 'Country',
                name: 'Japan'
              },
              audienceType: '日本のLINEユーザー'
            },
            inLanguage: [
              { '@type': 'Language', name: 'Japanese', alternateName: 'ja' },
              { '@type': 'Language', name: 'English', alternateName: 'en' },
              { '@type': 'Language', name: 'Korean', alternateName: 'ko' },
              { '@type': 'Language', name: 'Chinese (Simplified)', alternateName: 'zh' },
              { '@type': 'Language', name: 'Thai', alternateName: 'th' },
              { '@type': 'Language', name: 'Indonesian', alternateName: 'id' },
              { '@type': 'Language', name: 'Chinese (Traditional)', alternateName: 'tw' }
            ],
            potentialAction: [
              {
                '@type': 'SearchAction',
                target: 'https://download-line.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              },
              {
                '@type': 'DownloadAction',
                name: 'LINEアプリダウンロード',
                object: {
                  '@type': 'MobileApplication',
                  name: 'LINE',
                  operatingSystem: 'iOS, Android'
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
