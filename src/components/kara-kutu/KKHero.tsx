import Image from "next/image";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import StoreButton from "@/components/ui/StoreButton";
import { kk } from "@/components/kara-kutu/content";
import { getGame, storeOrder } from "@/lib/games";
import { Locale } from "@/lib/i18n";

const game = getGame("kara-kutu");

export default function KKHero({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale].hero;
  return (
    <section
      className="relative overflow-hidden px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(56px,8vw,96px)]"
      style={{ background: "radial-gradient(90% 70% at 80% 10%, rgba(255,176,46,.16) 0%, rgba(13,17,23,0) 60%), var(--kk-bg)" }}
    >
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={game.icon}
              alt={locale === "tr" ? "Kara Kutu simgesi" : "Kara Kutu icon"}
              width={72}
              height={72}
              priority
              className="rounded-[18px]"
              style={{ boxShadow: "0 16px 40px -14px rgba(255,138,61,.45), 0 0 0 1px rgba(255,176,46,.35)" }}
            />
            <span
              className="font-body font-bold text-xs tracking-[0.14em] uppercase px-3.5 py-1.5 border rounded-full"
              style={{ color: "var(--kk-amber)", borderColor: "rgba(255,176,46,.4)" }}
            >
              {t.eyebrow}
            </span>
          </div>

          <h1 className="kk-heading font-extrabold uppercase text-[clamp(52px,13vw,104px)] md:text-[clamp(56px,7.5vw,104px)] leading-[.95] tracking-[0.03em]">
            Kara Kutu
          </h1>
          <p className="kk-heading font-bold text-[clamp(22px,3vw,30px)] mt-3">
            {t.taglineStart}
            <span style={{ color: "var(--kk-amber)" }}>{t.taglineAccent}</span>
          </p>
          <p className="font-body text-[clamp(16px,1.8vw,19px)] leading-[1.6] text-text-body max-w-[500px] mt-5 mb-8">{t.description}</p>

          <div className="flex flex-wrap gap-3.5">
            {storeOrder.map((s) => (
              <StoreButton key={s} game={game} store={s} locale={locale} />
            ))}
          </div>

          <div className="flex gap-7 mt-10">
            {t.stats.map((s, i) => (
              <div key={s.label} className="flex gap-7">
                {i > 0 && <div className="w-px" style={{ background: "var(--color-border)" }} />}
                <div>
                  <div className="kk-heading font-extrabold text-[28px] leading-none" style={{ color: "var(--kk-text)" }}>
                    {s.value}
                  </div>
                  <div className="font-body font-medium text-[13px] text-text-muted mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <Parallax depth={-12} className="rg-float relative w-[clamp(220px,28vw,310px)]">
            <div
              className="relative overflow-hidden rounded-[28px]"
              style={{ aspectRatio: "1/2", boxShadow: "0 40px 80px -30px rgba(0,0,0,.9), 0 0 0 1px rgba(255,176,46,.18)" }}
            >
              <Image
                src={`/images/kara-kutu/${locale}/1-home.webp`}
                alt={t.shotAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 310px"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
