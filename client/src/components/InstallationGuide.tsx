import { useTranslation } from 'react-i18next';

const steps = [
  { number: 1, key: 'download' },
  { number: 2, key: 'account' },
  { number: 3, key: 'friends' },
];

export default function InstallationGuide() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('installation.title')}</h2>
          <p className="text-gray-600 text-lg">{t('installation.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 line-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t(`installation.steps.${step.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`installation.steps.${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
