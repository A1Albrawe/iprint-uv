"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
    >
      <Globe size={18} className="text-brand-blue dark:text-white" />
      <span className="text-sm font-bold uppercase">{locale === "ar" ? "En" : "عربي"}</span>
    </button>
  );
}
