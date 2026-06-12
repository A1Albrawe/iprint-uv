import { setRequestLocale, getTranslations } from 'next-intl/server';

// 💡 مصفوفة الهدايا بمفاتيح نظيفة بدون استدعاء الدالة t هنا لمنع انهيار الصفحة
const giftItems = [
  { nameKey: "aqlam-daaeyh", icon: "✒️", descKey: "aqlam-mkhssh-bshaar-shrktk-hdyh-amlyh-ystkhdmha-alamyl-ywmyaan" },
  { nameKey: "mydalyat", icon: "🏅", descKey: "mydalyat-tthkaryh-raqyh-mnasbh-llmnasbat-waltkrym" },
  { nameKey: "blwk-nwt", icon: "📓", descKey: "dfatr-mlahzat-mtbwah-bhwytk-albsryh" },
  { nameKey: "kwstr", icon: "🥏", descKey: "kwstrat-daaeyh-anyqh-llmkatb-walmtaam" },
  { nameKey: "mjat", icon: "☕", descKey: "akwab-qhwh-wshay-mtbwah-bshaar-alshrkh" },
  { nameKey: "ntaej-mktb", icon: "🗂️", descKey: "lwazm-mktbyh-daaeyh-libraz-hwytk-fy-byeh-alaml" },
  { nameKey: "ntaej-haet", icon: "🖼️", descKey: "lwhat-haet-daaeyh-ltzyyn-almkatb-walsalat" },
  { nameKey: "saaat-haet", icon: "🕐", descKey: "saaat-haet-mtbwah-bshaark-hdyh-amlyh-wanyqh" },
];

const galleryImages = [
  "/images/gift-1.jpeg",
  "/images/gift-2.jpg",
  "/images/gift-3.jpeg",
  "/images/gift-4.jpg",
  "/images/gift-5.jpeg",
  "/images/gift-6.jpg",
];

// 💡 مصفوفة نقاط الأهمية بمفاتيح نظيفة أيضاً للترجمة الديناميكية بالأسفل
const promoPoints = [
  { icon: "💡", titleKey: "tazyz-alway-balalamh", descKey: "ytthkrk-alamyl-fy-kl-mrh-ystkhdm-alhdyh" },
  { icon: "🤝", titleKey: "bnaa-alwlaa", descKey: "hdyh-tab-r-an-alahtmam-wtam-q-alalaqh-ma-alamyl" },
  { icon: "📣", titleKey: "tswyq-mjany", descKey: "alhdyh-alty-tura-ywmyaan-hy-ialan-mthrk-lamlk" },
];

export default async function GiftsPage(
  props: { params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 💡 جلب دالة الترجمة المتوافقة مع السيرفر وNext.js 15
  const t = await getTranslations();

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #7b2ff7 0%, #1a1a2e 50%, #f7a800 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1920&q=40')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-white/30">
            {t('khdmatna')}
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            🎁 {t('hdaya-daaeyh')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
           {t('nzraan-lahmyh-almwad-aldaaeyh')} — {t('hy-hdyh-yhtfz-bha-alamyl-nkhtar-ansb-alhdaya-mn-ajml-almwad-aldaaeyh-bma-ytnasb-ma-kl-amyl')}
          </p>
        </div>
      </section>

      {/* Gift Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t('ashkal-alhdaya-aldaaeyh')}</h2>
            <div className="w-24 h-1.5 bg-brand-pink mx-auto rounded-full" />
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
             {t('baqh-mtkamlh-mn-alhdaya-aldaaeyh-alty-taks-hwyh-alamtk-altjaryh-wtbqa-fy-thakrh-amlaek')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {giftItems.map((gift, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {gift.icon}
                </div>
                {/* 💡 ترجمة الاسم والوصف من المفاتيح ديناميكياً */}
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{t(gift.nameKey)}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t(gift.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Promo Gifts */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-pink text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('lmatha-alhdaya-aldaaeyh')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {promoPoints.map((point, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">{point.icon}</div>
                {/* 💡 ترجمة نقطة الأهمية ووصفها هنا بأمان */}
                <h3 className="text-xl font-bold mb-2">{t(point.titleKey)}</h3>
                <p className="text-white/80 text-sm">{t(point.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t('mn-aamalna')}</h2>
            <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Gift work ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 text-center border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('mhtm-bhdaya-daaeyh-lshrktk')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
           {t('twasl-mana-abr-watsab-wsnsaadk-fy-akhtyar-ansb-alhdaya-lamlaek')}
          </p>
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