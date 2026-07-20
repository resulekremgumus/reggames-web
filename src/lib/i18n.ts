export type Locale = "tr" | "en";

type PageKey = "home" | "games" | "about" | "privacy" | "terms" | "dataDeletion";

export const localePaths: Record<Locale, Record<PageKey, string>> = {
  tr: {
    home: "/",
    games: "/oyunlar",
    about: "/hakkimizda",
    privacy: "/gizlilik",
    terms: "/sartlar",
    dataDeletion: "/veri-silme",
  },
  en: {
    home: "/en",
    games: "/en/games",
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
