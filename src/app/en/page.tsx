import StudioHero from "@/components/studio/StudioHero";
import GamesShowcase from "@/components/studio/GamesShowcase";
import StudioAbout from "@/components/studio/StudioAbout";
import News from "@/components/studio/News";
import Contact from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  page: "home",
  title: "RegGames — Mobile game studio from İstanbul",
  description:
    "RegGames is an independent mobile game studio based in İstanbul. Our games: the endless runner Yetish and the tangram puzzle Kara Kutu.",
  image: "/og/studio.jpg",
});

export default function EnglishHome() {
  return (
    <>
      <StudioHero locale="en" />
      <GamesShowcase locale="en" />
      <StudioAbout locale="en" />
      <News locale="en" />
      <Contact locale="en" variant="studio" />
    </>
  );
}
