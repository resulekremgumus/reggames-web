import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Oyunlar — RegGames",
  description: "RegGames stüdyosunun oyunları: Yetish ve yakında gelecek yeni projeler.",
};

export default function GamesPage() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">Oyunlar</span>
        <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-4">Stüdyodan oyunlar</h1>
        <p className="text-text-body text-base md:text-lg max-w-[560px]">
          RegGames olarak İstanbul&apos;dan ilham alan, sade ve bağımlılık yaratan mobil oyunlar geliştiriyoruz.
        </p>
      </Reveal>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
        <Reveal>
          <Link
            href="/"
            className="rg-lift block rounded-2xl border overflow-hidden no-underline text-inherit"
            style={{ background: "var(--color-card)", borderColor: "var(--color-primary)" }}
          >
            <div className="relative">
              <ImagePlaceholder label="Yetish key-art (16:10)" aspect="16/10" radius={0} className="w-full" />
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: "var(--color-success)" }}
              >
                Yayında
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading font-extrabold text-2xl mb-2">Yetish</h2>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                İstanbul&apos;dan ilham alan bir haritada koş, engellerden kaç, coin topla.
              </p>
              <span className="text-primary font-body font-bold text-sm">İncele →</span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <div
            className="rounded-2xl border overflow-hidden opacity-85"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)", borderStyle: "dashed" }}
          >
            <div className="relative">
              <ImagePlaceholder label="İkinci oyun key-art (16:10)" aspect="16/10" radius={0} className="w-full" />
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: "var(--color-secondary)" }}
              >
                Yakında
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading font-extrabold text-2xl mb-2">İkinci Oyun</h2>
              <p className="text-text-body text-sm leading-relaxed">Detaylar yakında duyurulacak.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            className="rounded-2xl border overflow-hidden opacity-85"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)", borderStyle: "dashed" }}
          >
            <div className="relative">
              <ImagePlaceholder label="Yeni Şehir: İzmir key-art (16:10)" aspect="16/10" radius={0} className="w-full" />
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: "var(--color-text-muted)" }}
              >
                Planlama
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading font-extrabold text-2xl mb-2">Yeni Şehir: İzmir</h2>
              <p className="text-text-body text-sm leading-relaxed">Yetish evreninin ikinci şehri planlama aşamasında.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
