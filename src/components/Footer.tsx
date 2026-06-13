import { useTranslations } from "next-intl";

export default function Footer() {
  // استخدام دالة t عامة لتشمل "Contact" وباقي المفاتيح في نفس الوقت
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">iPrint</h3>
            <p className="text-sm leading-relaxed">
              {t("designs-and-printing-house-high-quality-continuity-fast-execution")}
            </p>
            <p className="mt-4 block w-full clear-both">
              <a
                href="https://www.facebook.com/profile.php?id=61563756885626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors text-sm font-bold bg-blue-600 px-4 py-2 rounded inline-block text-center shadow-md"
              >
                {t("sfhtna-ala-fysbwk-0")}
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t("Contact.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t("Contact.address")}</li>
              <li dir="ltr" className="rtl:text-right">{t("Contact.phone")}</li>
              <li>{t("Contact.email")}</li>
            </ul>
          </div>

          {/* Map Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("mwqana")}</h4>
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
        
        <div className="relative w-full h-20 bg-gray-900">

  <a 
    href="https://t.me/I_ALBRAWE" 
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute bottom-4 right-6 text-right select-none block hover:opacity-80 transition-opacity"
  >
    <div className="text-[10px] text-gray-400 tracking-wider">POWERED BY</div>
    <div className="text-sm font-bold text-gray-400">AL-BRAWE</div>
    <div className="text-[10px] text-gray-500 mt-0.5">(البراوي)</div>
  </a>
</div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} iPrint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}