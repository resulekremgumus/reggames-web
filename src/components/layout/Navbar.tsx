"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { games, gameHref } from "@/lib/games";
import { Locale, localePaths, otherLocaleHref } from "@/lib/i18n";

const dict = {
  tr: {
    home: "Ana Sayfa",
    games: "Oyunlar",
    about: "Hakkımızda",
    allGames: "Tüm oyunlar →",
    gamesMenu: "Oyunlar menüsü",
    menu: "Menü",
    close: "Kapat",
  },
  en: {
    home: "Home",
    games: "Games",
    about: "About",
    allGames: "All games →",
    gamesMenu: "Games menu",
    menu: "Menu",
    close: "Close",
  },
};

export default function Navbar({ locale = "tr" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const gamesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const t = dict[locale];
  const paths = localePaths[locale];
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
    setGamesOpen(false);
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
          <Link href={paths.home} className="rg-link">
            {t.home}
          </Link>
          <div
            ref={gamesRef}
            className="relative"
            onMouseEnter={() => setGamesOpen(true)}
            onMouseLeave={() => setGamesOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setGamesOpen(false)}
            onBlur={(e) => {
              if (!gamesRef.current?.contains(e.relatedTarget as Node)) setGamesOpen(false);
            }}
          >
            <div className="flex items-center gap-1">
              <Link href={paths.games} className="rg-link">
                {t.games}
              </Link>
              <button
                type="button"
                aria-label={t.gamesMenu}
                aria-expanded={gamesOpen}
                aria-controls="nav-games-menu"
                onClick={() => setGamesOpen((v) => !v)}
                className="bg-transparent border-0 p-1 cursor-pointer text-text-body hover:text-white"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className="transition-transform duration-200"
                  style={{ transform: gamesOpen ? "rotate(180deg)" : "none" }}
                >
                  <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div
              id="nav-games-menu"
              className="absolute left-1/2 top-full pt-4 w-[300px] transition-all duration-200"
              style={{
                opacity: gamesOpen ? 1 : 0,
                visibility: gamesOpen ? "visible" : "hidden",
                transform: gamesOpen ? "translate(-50%, 0)" : "translate(-50%, -6px)",
              }}
            >
              <div
                className="rounded-2xl border p-2"
                style={{
                  background: "rgba(14,23,41,.97)",
                  borderColor: "var(--color-border)",
                  boxShadow: "0 24px 50px -20px rgba(0,0,0,.85)",
                }}
              >
                {games.map((g) => (
                  <Link
                    key={g.slug}
                    href={gameHref(g, locale)}
                    className="flex items-center gap-3 p-2.5 rounded-xl no-underline hover:bg-white/5 transition-colors"
                  >
                    <Image src={g.icon} alt="" width={42} height={42} className="rounded-[11px] shrink-0" />
                    <span>
                      <span className="block font-heading font-bold text-[15px] text-white">{g.name}</span>
                      <span className="block text-[13px]" style={{ color: g.theme.accent }}>
                        {g.genre[locale]}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  href={paths.games}
                  className="block mt-1 px-2.5 py-2.5 border-t text-sm font-bold text-primary no-underline"
                  style={{ borderColor: "var(--color-border-thin)" }}
                >
                  {t.allGames}
                </Link>
              </div>
            </div>
          </div>
          <Link href={paths.about} className="rg-link">
            {t.about}
          </Link>
          <Link
            href={langHref}
            className="rg-link"
            style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "clamp(18px,3vw,34px)" }}
          >
            {locale === "tr" ? "EN" : "TR"}
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
        <MobileLink href={paths.home} onClick={() => setOpen(false)}>{t.home}</MobileLink>
        <MobileLink href={paths.games} onClick={() => setOpen(false)}>{t.games}</MobileLink>
        <div className="flex flex-col py-2 border-b" style={{ borderColor: "var(--color-border-thin)" }}>
          {games.map((g) => (
            <Link key={g.slug} href={gameHref(g, locale)} onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 pl-1 no-underline">
              <Image src={g.icon} alt="" width={38} height={38} className="rounded-[10px] shrink-0" />
              <span className="font-heading font-semibold text-lg text-white">{g.name}</span>
              <span className="text-[13px] ml-auto" style={{ color: g.theme.accent }}>
                {g.genre[locale]}
              </span>
            </Link>
          ))}
        </div>
        <MobileLink href={paths.about} onClick={() => setOpen(false)}>{t.about}</MobileLink>
      </div>
    </>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-heading font-bold text-2xl text-white py-4 border-b no-underline"
      style={{ borderColor: "var(--color-border-thin)" }}
    >
      {children}
    </Link>
  );
}
