import Link from "next/link";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import { games, gameHref } from "@/lib/games";
import { Locale, localePaths } from "@/lib/i18n";

const stars = [
  { top: "10%", left: "8%", delay: "0s" },
  { top: "30%", left: "22%", delay: "0.6s" },
  { top: "18%", left: "40%", delay: "1.2s" },
  { top: "50%", left: "60%", delay: "0.3s" },
  { top: "70%", left: "78%", delay: "0.9s" },
  { top: "35%", left: "88%", delay: "1.5s" },
];

const dict = {
  tr: {
    tagline: "İstanbul'dan, sade ve akılda kalan mobil oyunlar.",
    gameCol: "Oyunlar",
    games: "Tüm oyunlar",
    studioCol: "Stüdyo",
    about: "Hakkımızda",
    legalCol: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    dataDeletion: "Veri Silme",
    cookies: "Çerez tercihleri",
    notFound: "404",
    notFoundHref: "/404",
    rights: (year: number) => `© ${year} RegGames. Tüm hakları saklıdır.`,
    madeWith: "Made with ♥ in İstanbul",
  },
  en: {
    tagline: "Simple, memorable mobile games from İstanbul.",
    gameCol: "Games",
    games: "All games",
    studioCol: "Studio",
    about: "About",
    legalCol: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    dataDeletion: "Data Deletion",
    cookies: "Cookie preferences",
    notFound: "404",
    notFoundHref: "/en/404",
    rights: (year: number) => `© ${year} RegGames. All rights reserved.`,
    madeWith: "Made with ♥ in İstanbul",
  },
};

export default function Footer({ locale = "tr" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const t = dict[locale];

  return (
    <footer className="relative overflow-hidden bg-bg-dark px-[clamp(18px,5vw,52px)] pt-16 pb-8">
      {stars.map((s, i) => (
        <span
          key={i}
          className="rg-twinkle absolute w-[3px] h-[3px] rounded-full bg-white"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      <div className="relative max-w-[1160px] mx-auto grid gap-10 grid-cols-1 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="inline-block w-[22px] h-[22px] rounded-[5px] rotate-45"
              style={{ background: "linear-gradient(135deg,#22D3C5,#0fa89c)" }}
            />
            <span className="font-heading font-extrabold text-lg text-white">
              REG<span className="text-primary">GAMES</span>
            </span>
          </div>
          <p className="text-text-muted text-sm max-w-[220px]">{t.tagline}</p>
          <div className="flex gap-2 mt-5">
            {["X", "IG", "DC"].map((s) => (
              <span
                key={s}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-[10px] border border-border text-text-muted text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <FooterCol
          title={t.gameCol}
          links={[
            ...games.map((g) => ({ href: gameHref(g, locale), label: g.name })),
            { href: localePaths[locale].games, label: t.games },
          ]}
        />
        <FooterCol title={t.studioCol} links={[{ href: localePaths[locale].about, label: t.about }]} />
        <FooterCol
          title={t.legalCol}
          links={[
            { href: localePaths[locale].privacy, label: t.privacy },
            { href: localePaths[locale].terms, label: t.terms },
            { href: localePaths[locale].dataDeletion, label: t.dataDeletion },
            { href: t.notFoundHref, label: t.notFound },
          ]}
        >
          <CookieSettingsButton
            label={t.cookies}
            className="text-left text-text-muted text-sm hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer"
          />
        </FooterCol>
      </div>

      <div
        className="relative max-w-[1160px] mx-auto mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs text-text-faint"
        style={{ borderColor: "var(--color-border-thin-2)" }}
      >
        <span>{t.rights(year)}</span>
        <span>{t.madeWith}</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  children,
}: {
  title: string;
  links: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-heading font-bold text-sm text-white mb-4">{title}</h4>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="text-text-muted text-sm hover:text-white transition-colors">
            {l.label}
          </Link>
        ))}
        {children}
      </div>
    </div>
  );
}
