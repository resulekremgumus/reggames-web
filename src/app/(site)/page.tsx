import StudioHero from "@/components/studio/StudioHero";
import GamesShowcase from "@/components/studio/GamesShowcase";
import StudioAbout from "@/components/studio/StudioAbout";
import News from "@/components/studio/News";
import Contact from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "tr",
  page: "home",
  title: "RegGames — İstanbul'dan mobil oyun stüdyosu",
  description:
    "RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosu. Oyunlarımız: sonsuz koşu Yetish ve tangram bulmacası Kara Kutu.",
  image: "/og/studio.jpg",
});

export default function Home() {
  return (
    <>
      <StudioHero />
      <GamesShowcase />
      <StudioAbout />
      <News />
      <Contact variant="studio" />
    </>
  );
}
