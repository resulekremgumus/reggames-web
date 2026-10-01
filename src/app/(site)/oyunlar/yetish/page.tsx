import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import GameIntro from "@/components/sections/GameIntro";
import Gallery from "@/components/sections/Gallery";
import Features from "@/components/sections/Features";
import Characters from "@/components/sections/Characters";
import Outfits from "@/components/sections/Outfits";
import Roadmap from "@/components/sections/Roadmap";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "tr",
  page: "yetish",
  title: "Yetish — Sonsuz koşu oyunu | RegGames",
  description:
    "Engellerden kaç, coin topla, güçlendirmelerle yolunu aç: mesafe arttıkça zorlaşan sonsuz bir koşu. Yetish Google Play'de ücretsiz.",
  image: "/og/yetish.jpg",
});

export default function YetishPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <GameIntro />
      <Gallery />
      <Features />
      <Characters />
      <Outfits />
      <Roadmap />
      <Faq />
      <Contact />
    </>
  );
}
