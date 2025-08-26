import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import AdBanner from './AdBanner';
import { searchSections, type SearchResult } from '../utils/search';

export default function Header() {
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
      {/* Header Ad Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <AdBanner 
            className="h-20 flex items-center justify-center rounded bg-gray-100"
            slot="1234567890"
            format="horizontal"
            style={{ minHeight: '80px' }}
          />
        </div>
      </div>
      
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 line-green rounded-lg flex items-center justify-center">
                <i className="fab fa-line text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t('header.title')}</h1>
                <p className="text-xs text-gray-500">{t('header.subtitle')}</p>
              </div>
            </div>
            
            {/* Language Switcher and Search */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              {/* Desktop Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <input 
                    type="search" 
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                    placeholder={t('header.searchPlaceholder')}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-line-green focus:border-transparent w-64"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  {searchResults.length > 0 && searchQuery && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-50">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          onClick={() => scrollToSection(result.id)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                        >
                          <div className="font-medium text-sm">{result.title}</div>
                          <div className="text-xs text-gray-500">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile Search Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setSearchOpen(true)}
              >
                <i className="fas fa-search text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4">
            <div className="flex items-center space-x-4">
              <input 
                type="search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                placeholder={t('header.searchPlaceholder')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-line-green focus:border-transparent"
                autoFocus
              />
              <button 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setSearchOpen(false)}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            {searchResults.length > 0 && searchQuery && (
              <div className="mt-4 max-h-96 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      scrollToSection(result.id);
                      setSearchOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                  >
                    <div className="font-medium text-sm">{result.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchSections(query, t);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = () => {
    if (searchResults.length > 0) {
      scrollToSection(searchResults[0].id);
      setSearchOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setSearchQuery('');
      setSearchResults([]);
    }
  };
}
