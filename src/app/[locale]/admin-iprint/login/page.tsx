"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AdminLogin() {
  const t = useTranslations("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin-iprint");
    }
  };

  return (
    <div className="py-24 flex justify-center items-center w-full min-h-[70vh]">
      <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-pink" />
        <h1 className="text-3xl font-black text-center mb-8 text-slate-900 dark:text-white">{t("loginTitle")}</h1>
        
        {error && <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-xl mb-6 text-sm font-medium border border-red-200 dark:border-red-800/50">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">{t("emailLabel")}</label>
            <input 
              type="email" 
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">{t("passwordLabel")}</label>
            <input 
              type="password" 
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 transition-all" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-pink text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
          >
            {loading ? t("authenticating") : t("loginButton")}
          </button>
        </form>
      </div>
    </div>
  );
}
