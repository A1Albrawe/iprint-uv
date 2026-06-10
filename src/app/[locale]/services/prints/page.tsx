import { setRequestLocale } from 'next-intl/server';

const printCategories = [
  {
    title: "الكروت والمطبوعات التجارية",
    icon: "🪪",
    items: ["الكروت الشخصية", "بروشور", "فولدر", "فلايرز", "بوستر", "كتالوجات", "مجلات"],
  },
  {
    title: "مطبوعات المكاتب والشركات",
    icon: "🏢",
    items: ["خطاب شركة", "أظرف", "نتيجة مكتب", "نتيجة حائط", "أجندات", "بلوك نوت", "دفاتر الفواتير والايصالات"],
  },
  {
    title: "مطبوعات المطاعم والضيافة",
    icon: "🍽️",
    items: ["منيو", "مناديل", "شاليموه", "كوسترز", "مفرش ورقي", "دفاتر كابتن أوردر", "صناديق الديليفري"],
  },
  {
    title: "المطبوعات التعليمية والترويجية",
    icon: "📚",
    items: ["كتب جامعات", "إمساكيات رمضان", "علبة مناديل", "العلب", "ماجناتيك", "كوستر فل"],
  },
  {
    title: "طباعة الملابس والأكسسوار",
    icon: "👕",
    items: ["طباعة يونيفورم", "طباعة كابات"],
  },
  {
    title: "طباعة الوسائط الرقمية",
    icon: "💿",
    items: ["كفر سي دي", "استيكر سي دي", "طباعة ونسخ CD"],
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80",
];

export default async function PrintsPage(
  props: { params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-brand-blue via-slate-900 to-brand-pink text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1920&q=40')", backgroundSize: "cover" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-white/30">
            خدماتنا
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            المطبوعات الدعائية
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            من أهم وسائل الدعاية — نتميّز في تنفيذ المطبوعات بجودة عالية، شكل مميز، وأسعار منافسة.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">ما نقدمه</h2>
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
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-pink flex-shrink-0" />
                      {item}
                    </li>
                  ))}
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
            <h2 className="text-4xl font-bold mb-4">من أعمالنا</h2>
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
          <h2 className="text-3xl font-bold mb-4">هل تحتاج مطبوعات لعملك؟</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">تواصل معنا عبر واتساب وسنقدم لك أفضل عرض سعر فوراً</p>
          <a
            href="https://wa.me/201029769707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            💬 تواصل عبر واتساب
          </a>
        </div>
      </section>
    </div>
  );
}
