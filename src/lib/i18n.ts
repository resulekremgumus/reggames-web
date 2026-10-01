export type Locale = "tr" | "en";

export type PageKey =
  | "home"
  | "games"
  | "yetish"
  | "karaKutu"
  | "about"
  | "privacy"
  | "terms"
  | "dataDeletion";

export const localePaths: Record<Locale, Record<PageKey, string>> = {
  tr: {
    home: "/",
    games: "/oyunlar",
    yetish: "/oyunlar/yetish",
    karaKutu: "/oyunlar/kara-kutu",
    about: "/hakkimizda",
    privacy: "/gizlilik",
    terms: "/sartlar",
    dataDeletion: "/veri-silme",
  },
  en: {
    home: "/en",
    games: "/en/games",
    yetish: "/en/games/yetish",
    karaKutu: "/en/games/kara-kutu",
    about: "/en/about",
    privacy: "/en/privacy",
    terms: "/en/terms",
    dataDeletion: "/en/data-deletion",
  },
};

export function pageKeyFromPathname(pathname: string, locale: Locale): PageKey | null {
  const entries = Object.entries(localePaths[locale]) as [PageKey, string][];
  const match = entries.find(([, path]) => path === pathname);
  return match ? match[0] : null;
}

export function otherLocaleHref(pathname: string, locale: Locale): string {
  const other: Locale = locale === "tr" ? "en" : "tr";
  const key = pageKeyFromPathname(pathname, locale);
  return key ? localePaths[other][key] : localePaths[other].home;
}
