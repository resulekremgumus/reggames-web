import KKHero from "@/components/kara-kutu/KKHero";
import KKHowToPlay from "@/components/kara-kutu/KKHowToPlay";
import KKChapters from "@/components/kara-kutu/KKChapters";
import KKModes from "@/components/kara-kutu/KKModes";
import KKGallery from "@/components/kara-kutu/KKGallery";
import Faq from "@/components/sections/Faq";
import { kk } from "@/components/kara-kutu/content";
import { baloo } from "@/lib/fonts";
import { Locale } from "@/lib/i18n";

// Kara Kutu sayfası: TR ve EN rotaları bunu kullanır. Renkler globals.css'teki .kk-theme'den gelir.
export default function KaraKutuPage({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale];
  return (
    <div className={`kk-theme ${baloo.variable}`}>
      <KKHero locale={locale} />
      <KKHowToPlay locale={locale} />
      <KKChapters locale={locale} />
      <KKModes locale={locale} />
      <KKGallery locale={locale} />
      <Faq locale={locale} heading={t.faq.heading} items={t.faq.items} />
    </div>
  );
}
