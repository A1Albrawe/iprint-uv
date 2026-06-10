"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { href: "/services/prints", label: "🖨️ مطبوعات" },
    { href: "/services/signs", label: "🖼️ يفط ولافتات" },
    { href: "/services/gifts", label: "🎁 هدايا دعائية" },
  ];

  const links = [
    { href: "/", label: t("home") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 glass w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="iPrint Logo" className="h-14 w-auto object-contain bg-white rounded-lg p-1 shadow-sm" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 rtl:space-x-reverse">
              {/* Home */}
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("home")}
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t("services")}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full mt-2 w-52 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 rtl:right-0 ltr:left-0">
                    <div className="p-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-brand-blue/10 hover:text-brand-blue dark:hover:text-brand-yellow transition-all"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other links */}
              {links.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t("home")}
            </Link>

            {/* Mobile Services Section */}
            <div>
              <p className="block px-3 py-2 rounded-md text-base font-bold text-brand-blue dark:text-brand-yellow">
                {t("services")}
              </p>
              <div className="pl-4 border-l-2 border-brand-blue/30 ml-3 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
