import GameCard from "@/components/games/GameCard";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  page: "games",
  title: "Games — RegGames",
  description: "Games from RegGames studio: the endless runner Yetish and the tangram puzzle Kara Kutu.",
  image: "/og/studio.jpg",
});

export default function GamesPageEn() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">Games</span>
        <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-4">Games from the studio</h1>
        <p className="text-text-body text-base md:text-lg max-w-[560px]">
          At RegGames, we build simple, memorable mobile games in İstanbul. Each one has a world of its own.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {games.map((game, i) => (
          <Reveal key={game.slug} delay={i * 0.06} className="h-full">
            <GameCard game={game} locale="en" priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
