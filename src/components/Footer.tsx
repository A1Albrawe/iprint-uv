import { useTranslations } from "next-intl";

export default function Footer() {
  const tContact = useTranslations("Contact");

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">iPrint</h3>
            <p className="text-sm leading-relaxed">
              Designs & Printing House. High quality, continuity, fast execution.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{tContact("title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>{tContact("address")}</li>
              <li dir="ltr" className="rtl:text-right">{tContact("phone")}</li>
              <li>{tContact("email")}</li>
            </ul>
          </div>
          {/* Map Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">موقعنا</h4>
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg h-32 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.0128421005747!2d31.373789860687438!3d30.122446014976532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458173a7558a13d%3A0xd8352fa7cfb943a4!2siPrint!5e0!3m2!1sar!2seg!4v1781035556878!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iPrint Location Footer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} iPrint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
