import { Locale, PageKey, localePaths } from "@/lib/i18n";

// Stüdyonun tüm oyunları burada. Ana sayfa kartları, Oyunlar sayfası, navbar,
// footer, oyun sayfalarındaki mağaza düğmeleri ve sitemap hep bu listeden beslenir.
// Yeni oyun eklemek = bu listeye bir kayıt eklemek (+ oyunun kendi sayfası).
// Bir mağazada yayına girildiğinde: ilgili `url`'i yaz, `live: true` yap.

export type StoreKey = "googlePlay" | "appStore";

export type StoreLink = {
  url: string | null;
  live: boolean;
};

export type Game = {
  slug: string;
  pageKey: PageKey;
  name: string;
  genre: Record<Locale, string>;
  tagline: Record<Locale, string>;
  icon: string;
  keyArt: Record<Locale, string>;
  keyArtFit: "cover" | "contain";
  keyArtPosition?: string;
  ogImage: Record<Locale, string>;
  theme: {
    bg: string;
    surface: string;
    accent: string;
    accent2: string;
    onAccent: string;
    border: string;
    headingFont: "outfit" | "baloo";
  };
  stores: Record<StoreKey, StoreLink>;
};

export const games: Game[] = [
  {
    slug: "yetish",
    pageKey: "yetish",
    name: "Yetish",
    genre: { tr: "Sonsuz koşu", en: "Endless runner" },
    tagline: {
      tr: "Engellerden kaç, coin topla, güçlendirmelerle yolunu aç: mesafe arttıkça zorlaşan sonsuz bir koşu.",
      en: "Dodge obstacles, collect coins, unlock power-ups: an endless run that gets harder the further you go.",
    },
    icon: "/images/yetish/icon.webp",
    keyArt: {
      tr: "/images/game-intro/yetish-characters-group.png",
      en: "/images/game-intro/yetish-characters-group.png",
    },
    keyArtFit: "cover",
    keyArtPosition: "center 40%",
    ogImage: { tr: "/og/yetish.jpg", en: "/og/yetish.jpg" },
    theme: {
      bg: "#09111F",
      surface: "#121B2E",
      accent: "#22D3C5",
      accent2: "#F6C344",
      onAccent: "#06231F",
      border: "rgba(34,211,197,.45)",
      headingFont: "outfit",
    },
    stores: {
      googlePlay: {
        url: "https://play.google.com/store/apps/details?id=com.reggames.yetish&hl=tr",
        live: true,
      },
      appStore: { url: null, live: false },
    },
  },
  {
    slug: "kara-kutu",
    pageKey: "karaKutu",
    name: "Kara Kutu",
    genre: { tr: "Tangram bulmaca", en: "Tangram puzzle" },
    tagline: {
      tr: "Kara kutuyu parçalarla doldur: 6 bölümde 70 seviye, üstüne sonsuz Seri ve Patlama modları.",
      en: "Fill the black box with pieces: 70 levels across 6 chapters, plus endless Rush and Blast modes.",
    },
    icon: "/images/kara-kutu/icon.webp",
    keyArt: {
      tr: "/images/kara-kutu/feature-tr.webp",
      en: "/images/kara-kutu/feature-en.webp",
    },
    keyArtFit: "contain",
    ogImage: { tr: "/og/kara-kutu-tr.jpg", en: "/og/kara-kutu-en.jpg" },
    theme: {
      bg: "#0D1117",
      surface: "#151B24",
      accent: "#FFB02E",
      accent2: "#FF8A3D",
      onAccent: "#1A1206",
      border: "rgba(255,176,46,.45)",
      headingFont: "baloo",
    },
    stores: {
      // App Store: incelemede. Yayın sonrası Apple ID ile url'i yaz.
      appStore: { url: null, live: false },
      // Google Play: kapalı testte.
      googlePlay: {
        url: "https://play.google.com/store/apps/details?id=com.reggames.karakutu",
        live: false,
      },
    },
  },
];

export const storeOrder: StoreKey[] = ["googlePlay", "appStore"];

export const storeLabels: Record<StoreKey, Record<Locale, { name: string; liveBadge: string }>> = {
  googlePlay: {
    tr: { name: "Google Play", liveBadge: "Google Play'de" },
    en: { name: "Google Play", liveBadge: "On Google Play" },
  },
  appStore: {
    tr: { name: "App Store", liveBadge: "App Store'da" },
    en: { name: "App Store", liveBadge: "On the App Store" },
  },
};

export function getGame(slug: string): Game {
  const game = games.find((g) => g.slug === slug);
  if (!game) throw new Error(`Bilinmeyen oyun: ${slug}`);
  return game;
}

export function gameHref(game: Game, locale: Locale): string {
  return localePaths[locale][game.pageKey];
}

export function isStoreLive(link: StoreLink): link is { url: string; live: true } {
  return link.live && link.url !== null;
}
