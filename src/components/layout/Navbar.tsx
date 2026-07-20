"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Locale, localePaths, otherLocaleHref } from "@/lib/i18n";

const dict = {
  tr: {
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/oyunlar", label: "Oyunlar" },
      { href: "/hakkimizda", label: "Hakkımızda" },
    ],
    play: "Oyna",
    playArrow: "Oyna →",
    menu: "Menü",
    close: "Kapat",
  },
  en: {
    links: [
      { href: "/en", label: "Home" },
      { href: "/en/games", label: "Games" },
      { href: "/en/about", label: "About" },
    ],
    play: "Play",
    playArrow: "Play →",
    menu: "Menu",
    close: "Close",
  },
};

export default function Navbar({ locale = "tr" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const t = dict[locale];
  const heroHref = locale === "tr" ? "/#hero" : "/en#hero";
  const langHref = otherLocaleHref(pathname, locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(18px,5vw,52px)] py-4 border-b transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(9,17,31,.82)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderColor: scrolled ? "var(--color-border-thin-2)" : "transparent",
        }}
      >
        <Link href={localePaths[locale].home} className="flex items-center gap-2.5 no-underline">
          <span
            className="inline-block w-[22px] h-[22px] rounded-[5px] rotate-45"
            style={{
              background: "linear-gradient(135deg,#22D3C5,#0fa89c)",
              boxShadow: "0 0 16px rgba(34,211,197,.45)",
            }}
          />
          <span className="font-heading font-extrabold text-xl text-white tracking-tight">
            REG<span className="text-primary">GAMES</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-[clamp(18px,3vw,34px)]">
          {t.links.map((l) => (
            <Link key={l.href} href={l.href} className="rg-link">
              {l.label}
            </Link>
          ))}
          <Link
            href={langHref}
            className="rg-link"
            style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "clamp(18px,3vw,34px)" }}
          >
            {locale === "tr" ? "EN" : "TR"}
          </Link>
          <Link
            href={heroHref}
            className="rg-btn-primary rg-breathe px-5 py-2.5 bg-primary text-cta-on-primary rounded-[10px] font-body font-bold text-sm no-underline"
          >
            {t.play}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Link href={langHref} className="rg-link text-sm">
            {locale === "tr" ? "EN" : "TR"}
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label={t.menu}
            className="flex flex-col gap-[5px] bg-transparent border border-border rounded-[9px] p-[11px] cursor-pointer"
          >
            <span className="w-[18px] h-[2px] bg-white block rounded-full" />
            <span className="w-[18px] h-[2px] bg-white block rounded-full" />
            <span className="w-[18px] h-[2px] bg-white block rounded-full" />
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-[60] flex flex-col px-[clamp(18px,5vw,52px)] py-6 transition-all duration-300"
        style={{
          background: "rgba(9,17,31,.97)",
          backdropFilter: "blur(8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-heading font-extrabold text-xl text-white">
            REG<span className="text-primary">GAMES</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label={t.close}
            className="bg-transparent border border-border rounded-[9px] text-white text-xl w-[42px] h-[42px] leading-none"
          >
            ✕
          </button>
        </div>
        {t.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-heading font-bold text-2xl text-white py-4 border-b no-underline"
            style={{ borderColor: "var(--color-border-thin)" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href={heroHref}
          className="mt-7 text-center py-4 bg-primary text-cta-on-primary rounded-xl font-body font-bold text-lg no-underline"
        >
          {t.playArrow}
        </Link>
      </div>
    </>
  );
}
