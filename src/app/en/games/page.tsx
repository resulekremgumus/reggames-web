import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Games — RegGames",
  description: "Games from RegGames studio: Yetish and upcoming projects.",
};

export default function GamesPageEn() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">Games</span>
        <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-4">Games from the studio</h1>
        <p className="text-text-body text-base md:text-lg max-w-[560px]">
          At RegGames, we build simple, addictive mobile games inspired by İstanbul.
        </p>
      </Reveal>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
        <Reveal>
          <Link
            href="/en"
            className="rg-lift block rounded-2xl border overflow-hidden no-underline text-inherit"
            style={{ background: "var(--color-card)", borderColor: "var(--color-primary)" }}
          >
            <div className="relative">
              <ImagePlaceholder label="Yetish key art (16:10)" aspect="16/10" radius={0} className="w-full" />
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: "var(--color-success)" }}
              >
                Live on Android
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading font-extrabold text-2xl mb-2">Yetish</h2>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                Dodge obstacles, collect coins, unlock power-ups — an endless run that gets harder as you go.
              </p>
              <span className="text-primary font-body font-bold text-sm">Learn more →</span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <div
            className="rounded-2xl border overflow-hidden opacity-85"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)", borderStyle: "dashed" }}
          >
            <div className="relative">
              <ImagePlaceholder label="Second game key art (16:10)" aspect="16/10" radius={0} className="w-full" />
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: "var(--color-secondary)" }}
              >
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading font-extrabold text-2xl mb-2">Second Game</h2>
              <p className="text-text-body text-sm leading-relaxed">Details will be announced soon.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
