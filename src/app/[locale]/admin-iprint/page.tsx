"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js"; // 💡 استيراد النوع الصحيح
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AdminDashboard() {
  const t = useTranslations("Admin");
  // 💡 تحديد النوع بـ Session أو null بدلاً من any
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        router.push("/admin-iprint/login");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) router.push("/admin-iprint/login");
    });

    return () => subscription.unsubscribe();
  }, [router]);

  if (loading) return <div className="py-32 text-center text-xl font-bold">{t("loading")}</div>;
  if (!session) return null;

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {t("dashboardTitle")}
        </h1>
        <button 
          onClick={() => supabase.auth.signOut()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-md"
        >
          {t("logout")}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t("manageGallery")}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{t("manageGalleryDesc")}</p>
          <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
            {t("openGalleryManager")}
          </button>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">{t("manageServices")}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{t("manageServicesDesc")}</p>
          <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
            {t("openServicesManager")}
          </button>
        </div>
      </div>
    </div>
  );
}