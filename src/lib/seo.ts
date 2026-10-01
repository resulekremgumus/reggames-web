import type { Metadata } from "next";
import { Locale, PageKey, localePaths } from "@/lib/i18n";

export const SITE_URL = "https://reggames.net";

// Sayfa başına title, description, canonical, hreflang ve Open Graph bilgisi üretir.
export function pageMetadata({
  locale,
  page,
  title,
  description,
  image,
}: {
  locale: Locale;
  page: PageKey;
  title: string;
  description: string;
  image: string;
}): Metadata {
  const url = localePaths[locale][page];
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        tr: localePaths.tr[page],
        en: localePaths.en[page],
        "x-default": localePaths.tr[page],
      },
    },
    openGraph: {
      type: "website",
      siteName: "RegGames",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
