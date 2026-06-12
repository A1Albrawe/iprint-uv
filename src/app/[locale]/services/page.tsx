import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function Services(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  // 💡 جلب دالة الترجمة المتوافقة تماماً مع السيرفر وNext.js 15
  const t = await getTranslations();

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* 💡 إذا كانت كلمة "خدماتنا" داخل نطاق Navigation في الـ JSON، يمكنك تغييرها إلى t('Navigation.services') */}
      <h1 className="text-4xl font-bold mb-10 text-center">{t('services')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* UV Printing */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t('uvPrinting')}</h2>
          <p className="text-slate-600 dark:text-slate-400">High-quality UV printing for durable and vibrant colors on multiple materials.</p>
        </div>
        
        {/* Indoor Printing */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t('indoorPrinting')}</h2>
          <p className="text-slate-600 dark:text-slate-400">Crisp and clear indoor printing solutions perfect for banners, posters, and exhibitions.</p>
        </div>
        
        {/* Digital Printing */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t('digitalPrinting')}</h2>
          <p className="text-slate-600 dark:text-slate-400">Fast and reliable digital printing for your corporate needs with stunning quality.</p>
        </div>
        
        {/* Graphic Design */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t('design')}</h2>
          <p className="text-slate-600 dark:text-slate-400">Creative design solutions to make your brand stand out with a professional look.</p>
        </div>
      </div>
    </div>
  );
}