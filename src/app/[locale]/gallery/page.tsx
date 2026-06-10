import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default async function Gallery(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  // Placeholders that can be replaced via CMS
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80', title: 'Design 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80', title: 'Design 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', title: 'Design 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80', title: 'Design 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80', title: 'Design 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', title: 'Design 6' },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img.id} className="relative aspect-square overflow-hidden rounded-2xl group shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.url} 
              alt={img.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold text-lg">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
