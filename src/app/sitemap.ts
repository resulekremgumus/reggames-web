import type { MetadataRoute } from "next";
import { PageKey, localePaths } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const priority: Record<PageKey, number> = {
  home: 1,
  games: 0.9,
  yetish: 0.9,
  karaKutu: 0.9,
  about: 0.6,
  privacy: 0.3,
  terms: 0.3,
  dataDeletion: 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(localePaths.tr) as PageKey[];
  return pages.flatMap((page) =>
    (["tr", "en"] as const).map((locale) => ({
      url: `${SITE_URL}${localePaths[locale][page] === "/" ? "" : localePaths[locale][page]}`,
      changeFrequency: "monthly" as const,
      priority: locale === "tr" ? priority[page] : Math.max(priority[page] - 0.1, 0.1),
      alternates: {
        languages: {
          tr: `${SITE_URL}${localePaths.tr[page] === "/" ? "" : localePaths.tr[page]}`,
          en: `${SITE_URL}${localePaths.en[page]}`,
        },
      },
    })),
  );
}
