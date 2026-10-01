import Image from "next/image";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: {
    eyebrow: "Bağımsız mobil oyun stüdyosu",
    subtitle: "İstanbul'dan, sade ve akılda kalan mobil oyunlar.",
    cta: "Oyunlarımız ↓",
  },
  en: {
    eyebrow: "Independent mobile game studio",
    subtitle: "Simple, memorable mobile games from İstanbul.",
    cta: "Our games ↓",
  },
};

// Parçacıklar: Yetish coin'leri ve Kara Kutu'nun tangram parçaları.
const coins = [
  { pos: "top-[18%] left-[8%]", size: 34, depth: 22, duration: "4s" },
  { pos: "bottom-[16%] left-[28%]", size: 18, depth: 12, duration: "5.5s" },
  { pos: "top-[30%] right-[30%]", size: 14, depth: 8, duration: "6s" },
];

const pieces = [
  { pos: "top-[22%] right-[10%]", size: 40, color: "#FFB02E", clip: "polygon(0 100%, 100% 100%, 0 0)", depth: -20, delay: "0s" },
  { pos: "bottom-[22%] right-[20%]", size: 26, color: "#F4F1EA", clip: "none", depth: -12, delay: "1.2s" },
  { pos: "top-[58%] left-[14%]", size: 30, color: "#FF8A3D", clip: "polygon(50% 0, 100% 100%, 0 100%)", depth: 16, delay: "2.1s" },
  { pos: "top-[12%] left-[40%]", size: 18, color: "#E0675A", clip: "none", depth: 10, delay: "0.6s" },
];

export default function StudioHero({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center px-[clamp(18px,5vw,52px)] pt-[150px] pb-[150px] md:pt-[132px] md:pb-[96px] md:min-h-[min(88svh,820px)]"
      style={{
        background: "radial-gradient(110% 70% at 50% 0%, #132743 0%, #0b1424 50%, #09111F 80%)",
      }}
    >
      {/* Arka plan kolajı: iki oyunun görselleri, soluk ve eğik */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Parallax depth={-18} className="absolute -left-[18%] md:-left-[4%] top-[9%] md:top-[14%] w-[min(70vw,560px)]">
          <div
            className="relative w-full overflow-hidden rounded-[28px] opacity-[.22]"
            style={{ aspectRatio: "4/3", transform: "rotate(-7deg)", maskImage: "linear-gradient(90deg, #000 40%, transparent)" }}
          >
            <Image src="/images/game-intro/yetish-characters-group.webp" alt="" fill className="object-cover" sizes="560px" />
          </div>
        </Parallax>
        <Parallax depth={18} className="absolute -right-[22%] md:-right-[4%] bottom-[5%] md:bottom-[10%] w-[min(86vw,600px)]">
          <div
            className="relative w-full overflow-hidden rounded-[28px] opacity-[.3]"
            style={{ aspectRatio: "1024/500", transform: "rotate(6deg)", maskImage: "linear-gradient(270deg, #000 45%, transparent)" }}
          >
            <Image src={`/images/kara-kutu/feature-${locale}.webp`} alt="" fill className="object-cover" sizes="600px" />
          </div>
        </Parallax>

        {coins.map((c, i) => (
          <Parallax key={`c${i}`} depth={c.depth} className={`absolute ${c.pos}`}>
            <span
              className="rg-spin3d block rounded-full"
              style={{
                width: c.size,
                height: c.size,
                animationDuration: c.duration,
                background: "radial-gradient(circle at 35% 30%, #ffe08a, #F6C344 55%, #c98f14)",
                boxShadow: "0 0 22px rgba(246,195,68,.45)",
              }}
            />
          </Parallax>
        ))}
        {pieces.map((p, i) => (
          <Parallax key={`p${i}`} depth={p.depth} className={`absolute ${p.pos}`}>
            <span
              className="rg-float block opacity-80"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                clipPath: p.clip,
                borderRadius: p.clip === "none" ? 4 : 0,
                animationDelay: p.delay,
              }}
            />
          </Parallax>
        ))}

        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 50% 52%, rgba(9,17,31,.82), transparent 75%)" }} />
      </div>

      <Reveal className="relative w-full max-w-[860px] mx-auto text-center">
        <span
          className="inline-flex items-center gap-2 font-body font-bold text-xs tracking-[0.14em] text-primary px-3.5 py-1.5 border rounded-full uppercase"
          style={{ borderColor: "rgba(34,211,197,.4)", background: "rgba(9,17,31,.6)" }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-primary" style={{ boxShadow: "0 0 8px #22D3C5" }} />
          {t.eyebrow}
        </span>
        <h1
          className="font-heading font-black text-[clamp(60px,16vw,148px)] leading-[.92] tracking-[-0.04em] mt-6"
          style={{ textShadow: "0 12px 50px rgba(0,0,0,.55)" }}
        >
          Reg<span className="text-primary">Games</span>
        </h1>
        <p className="font-body text-[clamp(17px,2.1vw,22px)] leading-[1.5] text-text-body max-w-[520px] mx-auto mt-6 mb-9">
          {t.subtitle}
        </p>
        <a
          href="#oyunlar"
          className="rg-btn-primary rg-breathe inline-flex items-center gap-2 px-7 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base no-underline"
        >
          {t.cta}
        </a>
      </Reveal>
    </section>
  );
}
