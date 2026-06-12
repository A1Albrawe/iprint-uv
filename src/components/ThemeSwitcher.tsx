"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  // التأكد من أن المكون تم تحميله في المتصفح فقط لتجنب مشاكل Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  // إذا لم يتم التحميل بعد، نعرض حاوية فارغة بنفس الحجم لتجنب القفز في التصميم
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-brand-yellow" />
      ) : (
        <Moon size={20} className="text-brand-blue" />
      )}
    </button>
  );
}