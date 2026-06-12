import { setRequestLocale, getTranslations } from 'next-intl/server';

// 💡 جعل المصفوفة تحتوي على المفاتيح فقط بدون استدعاء الدالة t هنا لمنع انهيار السيرفر
const printCategories = [
  {
    titleKey: "alkrwt-walmtbwaat-altjaryh",
    icon: "🪪",
    itemKey: "alkrwt-alshkhsyh-brwshwr-fwldr-flayrz-bwstr-ktalwjat-mjlat",
  },
  {
    titleKey: "mtbwaat-almkatb-walshrkat",
    icon: "🏢",
    itemKey: "khtab-shrkh-azrf-ntyjh-mktb-ntyjh-haet-ajndat-blwk-nwt-dfatr-alfwatyr-walaysalat",
  },
  {
    titleKey: "almtbwaat-altalymyh-waltrwyjyh",
    icon: "📚",
    itemKey: "ktb-jamaat-imsakyat-rmdhan-albh-mnadyl-alalb-majnatyk-kwstr-fl",
  },
];

const galleryImages = [
  "/images/prints-1.jpeg",
  "/images/prints-2.jpeg",
  "/images/prints-3.jpeg",
  "/images/prints-4.jpeg",
  "/images/prints-5.jpeg",
  "/images/prints-6.jpeg",
];

export default async function PrintsPage(
  props: { params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 💡 جلب دالة الترجمة الخاصة بالسيرفر
  const t = await getTranslations();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-brand-blue via-slate-900 to-brand-pink text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1920&q=40')", backgroundSize: "cover" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-white/30">
           {t('khdmatna')}
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
           {t('almtbwaat-aldaaeyh')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
           {t('mn-ahm-wsael-aldaayh-ntmy-z-fy-tnfyth-almtbwaat-bjwdh-aalyh-shkl-mmyz-wasaar-mnafsh')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t('ma-nqdmh')}</h2>
            <div className="w-24 h-1.5 bg-brand-pink mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printCategories.map((cat, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                {/* 💡 ترجمة العنوان هنا بعدما تم تعريف الدالة t بالأسفل */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{t(cat.titleKey)}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink flex-shrink-0" />
                    {/* 💡 ترجمة العناصر الفرعية بشكل ديناميكي صحيح */}
                    {t(cat.itemKey)}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t('mn-aamalna')}</h2>
            <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-2xl group shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Print work ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('hl-thtaj-mtbwaat-lamlk')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">{t('twasl-mana-abr-watsab-wsnqdm-lk-afdhl-ardh-sar-fwraan')}</p>
          <a
            href="https://wa.me/201029769707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            💬 {t('twasl-abr-watsab')}
          </a>
        </div>
      </section>
    </div>
  );
}