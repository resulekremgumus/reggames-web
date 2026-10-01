import GameCard from "@/components/games/GameCard";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "tr",
  page: "games",
  title: "Oyunlar — RegGames",
  description: "RegGames stüdyosunun oyunları: sonsuz koşu Yetish ve tangram bulmacası Kara Kutu.",
  image: "/og/studio.jpg",
});

export default function GamesPage() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">Oyunlar</span>
        <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-4">Stüdyodan oyunlar</h1>
        <p className="text-text-body text-base md:text-lg max-w-[560px]">
          RegGames olarak İstanbul&apos;dan sade, akılda kalan mobil oyunlar geliştiriyoruz. Her birinin kendi dünyası var.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {games.map((game, i) => (
          <Reveal key={game.slug} delay={i * 0.06} className="h-full">
            <GameCard game={game} locale="tr" priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
