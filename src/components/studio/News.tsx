import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";
import { Locale, localePaths } from "@/lib/i18n";
import { formatNewsDate, news } from "@/lib/news";

const dict = {
  tr: { eyebrow: "Haberler", title: "Stüdyodan son durum", studio: "Stüdyo", more: "Devamı →" },
  en: { eyebrow: "News", title: "Latest from the studio", studio: "Studio", more: "Read more →" },
};

export default function News({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  const items = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-10">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em] mt-3">{t.title}</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => {
          const game = games.find((g) => g.slug === item.game);
          const accent = game?.theme.accent ?? "var(--color-text-muted)";
          return (
            <Reveal key={item.id} delay={i * 0.06} className="h-full">
              <article
                className="h-full flex flex-col p-6 md:p-7 rounded-2xl border"
                style={{ background: "var(--color-card-3)", borderColor: "var(--color-border)", borderTop: `3px solid ${accent}` }}
              >
                <div className="flex items-center justify-between gap-3 mb-4 text-[13px]">
                  <span className="font-bold" style={{ color: accent }}>
                    {game?.name ?? t.studio}
                  </span>
                  <time dateTime={item.date} className="text-text-muted">
                    {formatNewsDate(item.date, locale)}
                  </time>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{item.title[locale]}</h3>
                <p className="text-text-body text-[15px] leading-relaxed mb-5">{item.text[locale]}</p>
                {item.link && (
                  <Link href={localePaths[locale][item.link]} className="mt-auto self-start text-primary font-body font-bold text-sm no-underline">
                    {t.more}
                  </Link>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
