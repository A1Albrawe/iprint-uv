import { setRequestLocale } from 'next-intl/server';

const giftItems = [
  { name: "أقلام دعائية", icon: "✒️", desc: "أقلام مخصصة بشعار شركتك — هدية عملية يستخدمها العميل يومياً" },
  { name: "ميداليات", icon: "🏅", desc: "ميداليات تذكارية راقية مناسبة للمناسبات والتكريم" },
  { name: "بلوك نوت", icon: "📓", desc: "دفاتر ملاحظات مطبوعة بهويتك البصرية" },
  { name: "كوستر", icon: "🥏", desc: "كوسترات دعائية أنيقة للمكاتب والمطاعم" },
  { name: "ماجناتيك", icon: "🧲", desc: "مغناطيسات إعلانية للثلاجات والأسطح المعدنية" },
  { name: "تي شيرتات", icon: "👕", desc: "تيشرتات مطبوعة بتصاميمك — ترويج متنقل لعلامتك" },
  { name: "مجات", icon: "☕", desc: "أكواب قهوة وشاي مطبوعة بشعار الشركة" },
  { name: "كابات", icon: "🧢", desc: "قبعات دعائية مميزة لفريق عملك وعملائك" },
  { name: "نتائج مكتب", icon: "🗂️", desc: "لوازم مكتبية دعائية لإبراز هويتك في بيئة العمل" },
  { name: "نتائج حائط", icon: "🖼️", desc: "لوحات حائط دعائية لتزيين المكاتب والصالات" },
  { name: "ساعات حائط", icon: "🕐", desc: "ساعات حائط مطبوعة بشعارك — هدية عملية وأنيقة" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
];

export default async function GiftsPage(
  props: { params: Promise<{ locale: string }> }
) {
  const { locale } = await props.params;
  setRequestLocale(locale);

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
            خدماتنا
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            🎁 هدايا دعائية
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            نظراً لأهمية المواد الدعائية — هي هدية يحتفظ بها العميل، نختار أنسب الهدايا من أجمل المواد الدعائية بما يتناسب مع كل عميل.
          </p>
        </div>
      </section>

      {/* Gift Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">أشكال الهدايا الدعائية</h2>
            <div className="w-24 h-1.5 bg-brand-pink mx-auto rounded-full" />
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              باقة متكاملة من الهدايا الدعائية التي تعكس هوية علامتك التجارية وتبقى في ذاكرة عملائك
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
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{gift.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Promo Gifts */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-pink text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">لماذا الهدايا الدعائية؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "💡", title: "تعزيز الوعي بالعلامة", desc: "يتذكرك العميل في كل مرة يستخدم الهدية" },
              { icon: "🤝", title: "بناء الولاء", desc: "هدية تعبّر عن الاهتمام وتعمّق العلاقة مع العميل" },
              { icon: "📣", title: "تسويق مجاني", desc: "الهدية التي تُرى يومياً هي إعلان متحرك لعملك" },
            ].map((point, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">{point.icon}</div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-white/80 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">من أعمالنا</h2>
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
          <h2 className="text-3xl font-bold mb-4">مهتم بهدايا دعائية لشركتك؟</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            تواصل معنا عبر واتساب وسنساعدك في اختيار أنسب الهدايا لعملائك
          </p>
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
