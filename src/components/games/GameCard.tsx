import Image from "next/image";
import Link from "next/link";
import StoreButton from "@/components/ui/StoreButton";
import { baloo } from "@/lib/fonts";
import { Game, gameHref, isStoreLive, storeLabels, storeOrder } from "@/lib/games";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: { explore: "Oyunu incele →", soon: "Yakında", iconAlt: (n: string) => `${n} simgesi`, artAlt: (n: string) => `${n} tanıtım görseli` },
  en: { explore: "Explore the game →", soon: "Coming soon", iconAlt: (n: string) => `${n} icon`, artAlt: (n: string) => `${n} key art` },
};

export const headingFontFamily: Record<Game["theme"]["headingFont"], string> = {
  outfit: "var(--font-heading)",
  baloo: "var(--font-baloo), var(--font-heading)",
};

// Oyun kartı: ana sayfa ve Oyunlar sayfası kullanır. Renkler ve bağlantılar games.ts'den gelir.
export default function GameCard({ game, locale = "tr", priority = false }: { game: Game; locale?: Locale; priority?: boolean }) {
  const t = dict[locale];
  const href = gameHref(game, locale);
  const { theme } = game;
  const liveStores = storeOrder.filter((s) => isStoreLive(game.stores[s]));

  return (
    <article
      className={`rg-lift h-full flex flex-col rounded-[22px] border overflow-hidden ${theme.headingFont === "baloo" ? baloo.variable : ""}`}
      style={{
        background: `linear-gradient(180deg, ${theme.surface} 0%, ${theme.bg} 100%)`,
        borderColor: theme.border,
      }}
    >
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block" style={{ aspectRatio: "16/10", background: theme.bg }}>
        <Image
          src={game.keyArt[locale]}
          alt=""
          fill
          priority={priority}
          className={game.keyArtFit === "cover" ? "object-cover" : "object-contain"}
          style={game.keyArtPosition ? { objectPosition: game.keyArtPosition } : undefined}
          sizes="(max-width: 768px) 100vw, 560px"
        />
        <span
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{ background: `linear-gradient(180deg, transparent, ${theme.surface})` }}
        />
        <span className="absolute top-3 left-3 flex flex-wrap gap-2">
          {liveStores.length > 0 ? (
            liveStores.map((s) => (
              <Badge key={s} color="var(--color-success)">
                {storeLabels[s][locale].liveBadge}
              </Badge>
            ))
          ) : (
            <Badge color={theme.accent}>{t.soon}</Badge>
          )}
        </span>
      </Link>

      <div className="relative flex-1 flex flex-col px-6 pb-6 md:px-7 md:pb-7">
        <div className="flex items-end gap-4 -mt-10 mb-4">
          <Image
            src={game.icon}
            alt={t.iconAlt(game.name)}
            width={76}
            height={76}
            className="rounded-[20px] shrink-0"
            style={{ boxShadow: `0 14px 30px -12px rgba(0,0,0,.8), 0 0 0 2px ${theme.border}` }}
          />
          <div className="pb-1 min-w-0">
            <span className="block font-body font-bold text-[12px] tracking-[0.14em] uppercase" style={{ color: theme.accent }}>
              {game.genre[locale]}
            </span>
            <h3 className="font-extrabold text-[28px] leading-tight text-white" style={{ fontFamily: headingFontFamily[theme.headingFont] }}>
              <Link href={href} className="no-underline text-inherit">
                {game.name}
              </Link>
            </h3>
          </div>
        </div>

        <p className="text-text-body text-[15px] leading-relaxed mb-6">{game.tagline[locale]}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {storeOrder.map((s) => (
            <StoreButton key={s} game={game} store={s} locale={locale} size="sm" />
          ))}
        </div>

        <Link href={href} className="mt-auto font-body font-bold text-[15px] no-underline self-start" style={{ color: theme.accent }}>
          {t.explore}
        </Link>
      </div>
    </article>
  );
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(7,13,24,.85)", color }}>
      {children}
    </span>
  );
}
