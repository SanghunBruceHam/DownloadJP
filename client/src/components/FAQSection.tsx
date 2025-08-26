import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../lib/queryClient';

const faqKeys = ['free', 'data', 'multidevice', 'delete'];

export default function FAQSection() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  
  const toggleFAQ = async (faqKey: string) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(faqKey)) {
      newOpenItems.delete(faqKey);
    } else {
      newOpenItems.add(faqKey);
      
      // Track FAQ view
      try {
        await apiRequest('POST', '/api/faq-views', {
          question: faqKey,
          language: t('common.currentLanguage'),
        });
      } catch (error) {
        console.error('FAQ view tracking failed:', error);
      }
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq-section" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
          <p className="text-gray-600 text-lg">{t('faq.description')}</p>
        </div>
        
        <div className="space-y-4">
          {faqKeys.map((faqKey) => {
            const isOpen = openItems.has(faqKey);
            
            return (
              <div key={faqKey} className="bg-gray-50 rounded-lg">
                <button
                  onClick={() => toggleFAQ(faqKey)}
                  className="w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <span>{t(`faq.items.${faqKey}.question`)}</span>
                  <i className={`fas fa-chevron-down transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-600">
                    {t(`faq.items.${faqKey}.answer`)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
