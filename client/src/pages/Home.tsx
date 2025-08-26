import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PlatformGrid from '../components/PlatformGrid';
import AdBanner from '../components/AdBanner';
import FeaturesSection from '../components/FeaturesSection';
import InstallationGuide from '../components/InstallationGuide';
import DetailedGuide from '../components/DetailedGuide';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Set document language based on current i18n language
    const currentLang = document.documentElement.lang || 'ja';
    document.documentElement.lang = currentLang;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      
      <Header />
      
      <main>
        <section id="hero-section">
          <HeroSection />
        </section>
        
        <section id="features-section">
          <FeaturesSection />
        </section>
        <section id="installation-section">
          <InstallationGuide />
        </section>
        <section id="guide-section">
          <DetailedGuide />
        </section>
        <section id="faq-section">
          <FAQSection />
        </section>
        
        {/* Middle Content Ad */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <AdBanner 
                slot="1234567892"
                format="rectangle"
                style={{ minHeight: '280px' }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Sidebar Ads (Desktop only) */}
      <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 w-64 space-y-4 z-10">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <AdBanner 
            slot="1234567893"
            format="rectangle"
            style={{ minHeight: '250px' }}
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <AdBanner 
            slot="1234567894"
            format="rectangle"
            style={{ minHeight: '250px' }}
          />
        </div>
      </div>
      
      <section id="platforms-section">
        <PlatformGrid />
      </section>
      
      <Footer />
    </div>
  );
}
