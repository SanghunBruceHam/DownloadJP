import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '' // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `LINE ガイドサイトからのお問い合わせ - ${formData.name}様`,
          _gotcha: formData._gotcha,
          _replyto: formData.email,
          _language: 'ja',
          _template: 'basic'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(t('contact.form.error') || '送信に失敗しました。後でもう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Character limit for message field
    if (name === 'message' && value.length > 2000) {
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEOHead
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        keywords={t('contact.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 line-green rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('contact.form.title')}
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <i className="fas fa-check-circle text-green-600 text-3xl mb-4"></i>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {t('contact.form.success.title')}
                    </h3>
                    <p className="text-green-700">
                      {t('contact.form.success.message')}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-green-600 hover:text-green-700 font-medium"
                    >
                      {t('contact.form.success.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={formData._gotcha}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-line-green focus:border-transparent transition-colors"
                        placeholder={t('contact.form.namePlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-line-green focus:border-transparent transition-colors"
                        placeholder={t('contact.form.emailPlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-line-green focus:border-transparent resize-vertical transition-colors"
                        placeholder={t('contact.form.messagePlaceholder')}
                        disabled={isSubmitting}
                      />
                      <div className="text-xs text-gray-500 mt-1">
                        {formData.message.length}/2000
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-line-green text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line-green disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          {t('contact.form.sending')}
                        </span>
                      ) : (
                        t('contact.form.send')
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Guidelines */}
            <div className="space-y-8">
              {/* Response Guidelines */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.guidelines.title')}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <i className="fas fa-clock text-blue-500 mt-1 mr-3"></i>
                    <span>{t('contact.guidelines.response')}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-language text-green-500 mt-1 mr-3"></i>
                    <span>{t('contact.guidelines.language')}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-shield-alt text-purple-500 mt-1 mr-3"></i>
                    <span>{t('contact.guidelines.privacy')}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope-open text-orange-500 mt-1 mr-3"></i>
                    <span>{t('contact.guidelines.limit')}</span>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {t('contact.alternative.title')}
                </h3>
                <div className="space-y-2 text-blue-800">
                  <p className="text-sm">{t('contact.alternative.description')}</p>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-envelope mr-2"></i>
                    <a 
                      href="mailto:contact@download-line.com"
                      className="bg-blue-100 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                      contact@download-line.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-yellow-600 mt-1 mr-3"></i>
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">{t('contact.disclaimer.title')}</p>
                    <p>{t('contact.disclaimer.content')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}