import { Locale, PageKey } from "@/lib/i18n";

// Ana sayfadaki "Haberler" bölümü. En yeni haber en üstte; ana sayfada ilk 3 tanesi görünür.
// Kara Kutu yayına girince en üste "Kara Kutu App Store'da!" gibi bir kayıt ekle.

export type NewsItem = {
  id: string;
  date: string; // YYYY-MM-DD
  game?: string; // games.ts'deki slug
  title: Record<Locale, string>;
  text: Record<Locale, string>;
  link?: PageKey;
};

export const news: NewsItem[] = [
  {
    id: "kara-kutu-geliyor",
    date: "2026-10-02",
    game: "kara-kutu",
    title: {
      tr: "Kara Kutu geliyor",
      en: "Kara Kutu is coming",
    },
    text: {
      tr: "Tangram esinli yeni bulmacamız App Store incelemesinde, Google Play'de kapalı testte. 6 bölüm, 70 seviye ve iki sonsuz mod çok yakında.",
      en: "Our new tangram-style puzzle is in App Store review and closed testing on Google Play. 6 chapters, 70 levels and two endless modes, coming very soon.",
    },
    link: "karaKutu",
  },
  {
    id: "iki-oyun-tek-cati",
    date: "2026-10-02",
    title: {
      tr: "Yeni site: iki oyun, tek çatı",
      en: "New site: two games, one home",
    },
    text: {
      tr: "reggames.net artık stüdyonun vitrini. Her oyunun kendi sayfası var; yeni oyunlar da buraya eklenecek.",
      en: "reggames.net is now the studio's home. Every game has its own page, and new games will land here too.",
    },
    link: "games",
  },
  {
    id: "yetish-google-play",
    date: "2026-03-01",
    game: "yetish",
    title: {
      tr: "Yetish Google Play'de yayında",
      en: "Yetish is live on Google Play",
    },
    text: {
      tr: "İlk oyunumuz Yetish Android'de. Engellerden kaç, coin topla, rekorunu kır. App Store sürümü yolda.",
      en: "Our first game, Yetish, is out on Android. Dodge obstacles, collect coins, beat your record. The App Store version is on its way.",
    },
    link: "yetish",
  },
];

export function formatNewsDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
