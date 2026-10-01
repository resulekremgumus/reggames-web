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
  locale: "en",
  page: "yetish",
  title: "Yetish — Endless runner | RegGames",
  description:
    "Dodge obstacles, collect coins, unlock power-ups: an endless run that gets harder the further you go. Yetish is free on Google Play.",
  image: "/og/yetish.jpg",
});

export default function YetishPageEn() {
  return (
    <>
      <Hero locale="en" />
      <Ticker locale="en" />
      <GameIntro locale="en" />
      <Gallery locale="en" />
      <Features locale="en" />
      <Characters locale="en" />
      <Outfits locale="en" />
      <Roadmap locale="en" />
      <Faq locale="en" />
      <Contact locale="en" />
    </>
  );
}
