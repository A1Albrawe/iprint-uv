import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default async function Contact(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  // Next-intl works differently in async components on Next.js 15, let's just hardcode or import messages if it's dynamic
  const phone = "+20 10 29769707";
  const email = "info.iprintuv@gmail.com";
  const address = "32 Abd El-Aziz El-Sayed, Huckstep, El Nozha, Cairo, Egypt";
  const whatsappUrl = `https://wa.me/201029769707`;

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4">
            <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{address}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4">
            <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1" dir="ltr">{phone}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4">
            <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{email}</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="mb-8 opacity-90 text-lg">Send us a message on WhatsApp and we will get back to you immediately.</p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg w-full md:w-auto text-center flex items-center justify-center gap-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
            <MapPin size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">موقعنا على الخريطة</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">٣٢ عبد العزيز السيد، الهايكستب، قسم النزهة، القاهرة</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.0128421005747!2d31.373789860687438!3d30.122446014976532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458173a7558a13d%3A0xd8352fa7cfb943a4!2siPrint!5e0!3m2!1sar!2seg!4v1781035556878!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iPrint Location"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://www.google.com/maps/search/32+%D8%B9%D8%A8%D8%AF+%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%8C+%D8%A7%D9%84%D9%87%D8%A7%D9%8A%D9%83%D8%B3%D8%AA%D8%A8%D8%8C+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D9%86%D8%B2%D9%87%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all shadow-md hover:-translate-y-0.5"
          >
            <MapPin size={16} />
            افتح في خرائط جوجل
          </a>
        </div>
      </div>
    </div>
  );
}
