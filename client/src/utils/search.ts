export interface SearchResult {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export function searchSections(query: string, t: any): SearchResult[] {
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  const sections: SearchResult[] = [
    {
      id: 'hero-section',
      title: t('hero.title.main') + ' ' + t('hero.title.highlight'),
      description: t('hero.description'),
      keywords: ['line', 'download', 'ダウンロード', 'アプリ', 'app', '無料', 'free', 'install', 'インストール']
    },
    {
      id: 'platforms-section',
      title: t('platforms.title'),
      description: t('platforms.description'),
      keywords: ['platform', 'プラットフォーム', 'android', 'ios', 'windows', 'mac', 'smartphone', 'pc', 'スマホ']
    },
    {
      id: 'features-section',
      title: t('features.title'),
      description: t('features.description'),
      keywords: ['features', '機能', 'chat', 'チャット', 'call', '通話', 'sticker', 'スタンプ', 'group', 'グループ']
    },
    {
      id: 'installation-section',
      title: t('installation.title'),
      description: t('installation.description'),
      keywords: ['install', 'インストール', 'guide', 'ガイド', 'setup', '設定', 'account', 'アカウント']
    },
    {
      id: 'guide-section',
      title: t('guide.title'),
      description: t('guide.description'),
      keywords: ['guide', 'ガイド', 'help', 'ヘルプ', 'usage', '使い方', 'tutorial', 'チュートリアル']
    },
    {
      id: 'faq-section',
      title: t('faq.title'),
      description: t('faq.description'),
      keywords: ['faq', '質問', 'question', 'help', 'ヘルプ', 'support', 'サポート', '問題']
    }
  ];

  const results = sections.filter(section => {
    const searchableText = [
      section.title,
      section.description,
      ...section.keywords
    ].join(' ').toLowerCase();
    
    return searchTerms.some(term => 
      searchableText.includes(term) || 
      section.keywords.some(keyword => 
        keyword.toLowerCase().includes(term) || 
        term.includes(keyword.toLowerCase())
      )
    );
  });

  // Sort by relevance (number of matching terms)
  return results.sort((a, b) => {
    const aMatches = searchTerms.filter(term => 
      [a.title, a.description, ...a.keywords].join(' ').toLowerCase().includes(term)
    ).length;
    const bMatches = searchTerms.filter(term => 
      [b.title, b.description, ...b.keywords].join(' ').toLowerCase().includes(term)
    ).length;
    return bMatches - aMatches;
  });
}