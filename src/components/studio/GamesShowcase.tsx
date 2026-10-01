import GameCard from "@/components/games/GameCard";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: { eyebrow: "Oyunlar", title: "İki oyun, iki ayrı dünya", text: "Biri seni koşturuyor, öteki düşündürüyor. İkisi de cebinde." },
  en: { eyebrow: "Games", title: "Two games, two worlds", text: "One keeps you running, the other keeps you thinking. Both fit in your pocket." },
};

export default function GamesShowcase({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section id="oyunlar" className="scroll-mt-16 px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em] mt-3 mb-3">{t.title}</h2>
        <p className="text-text-body text-base md:text-lg max-w-[520px] mx-auto">{t.text}</p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {games.map((game, i) => (
          <Reveal key={game.slug} delay={i * 0.08} className="h-full">
            <GameCard game={game} locale={locale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
