import { useTranslation } from 'react-i18next';

const features = [
  { icon: 'fas fa-comment-dots', key: 'chat' },
  { icon: 'fas fa-phone', key: 'call' },
  { icon: 'fas fa-laugh', key: 'stickers' },
  { icon: 'fas fa-users', key: 'groups' },
  { icon: 'fas fa-camera', key: 'camera' },
  { icon: 'fas fa-shield-alt', key: 'security' },
];

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
          <p className="text-gray-600 text-lg">{t('features.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.key} className="text-center">
              <div className="w-20 h-20 line-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
