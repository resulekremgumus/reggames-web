import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import ComingSoonButton from "@/components/ui/ComingSoonButton";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.reggames.yetish&hl=tr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-[clamp(18px,5vw,52px)] pt-[132px] pb-[60px]"
      style={{
        background:
          "radial-gradient(120% 80% at 78% 0%, #132743 0%, #0b1424 45%, #09111F 78%)",
      }}
    >
      <Parallax depth={26} className="absolute top-[120px] right-[12%]">
        <span className="rg-spin3d block w-11 h-11 rounded-full" style={coinStyle} />
      </Parallax>
      <Parallax depth={16} className="absolute top-[270px] left-[9%]">
        <span
          className="rg-spin3d block w-[26px] h-[26px] rounded-full"
          style={{ ...coinStyle, animationDuration: "5.5s" }}
        />
      </Parallax>
      <span
        className="rg-spin3d absolute bottom-[120px] right-[24%] w-4 h-4 rounded-full opacity-70"
        style={{ background: "#F6C344", animationDuration: "6s" }}
      />

      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-12 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-body font-bold text-xs tracking-[0.14em] text-primary px-3.5 py-1.5 border rounded-full uppercase" style={{ borderColor: "rgba(34,211,197,.4)" }}>
            <span className="w-[7px] h-[7px] rounded-full bg-primary" style={{ boxShadow: "0 0 8px #22D3C5" }} />
            Yeni · Endless Runner
          </span>

          <h1 className="font-heading font-black text-[clamp(56px,17vw,104px)] md:text-[clamp(58px,7.5vw,104px)] leading-[.94] tracking-[-0.03em] mt-5" style={{ textShadow: "0 12px 50px rgba(0,0,0,.5)" }}>
            Yet<span className="text-primary">ish</span>
          </h1>

          <p className="font-body text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-text-body max-w-[440px] mt-5 mb-8">
            İstanbul&apos;un enerjisiyle dolu bir dünyada koş, engellerden kaç, coin topla ve güçlendirmelerle yolunu aç — önünde sonsuz bir koşu var.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <ComingSoonButton className="rg-btn-primary rg-breathe inline-flex items-center gap-2.5 px-6 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base border-0 cursor-pointer">
              <AppleIcon /> App Store
            </ComingSoonButton>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rg-btn-ghost inline-flex items-center gap-2.5 px-6 py-4 bg-transparent text-white border border-border rounded-[13px] font-body font-semibold text-base no-underline"
            >
              <PlayIcon /> Google Play
            </a>
          </div>

          <div className="flex gap-7 mt-10">
            <Stat value="1.8K" label="İndirme" />
            <div className="w-px" style={{ background: "var(--color-border-thin)" }} />
            <Stat value="8" label="Yorum" />
            <div className="w-px" style={{ background: "var(--color-border-thin)" }} />
            <Stat value="4.5" suffix="★" suffixColor="#F6C344" label="Puan" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <Parallax depth={-14} className="rg-float relative w-[clamp(220px,26vw,300px)]">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "9/19",
                borderRadius: 38,
                border: "8px solid #1a2740",
                background: "#0b1424",
                boxShadow: "0 40px 80px -28px rgba(0,0,0,.85), 0 0 0 2px rgba(34,211,197,.12)",
              }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[52%] h-[22px] rounded-b-[14px] z-[3]" style={{ background: "#1a2740" }} />
              <ImagePlaceholder label="Yetish oyun içi görsel (9:19)" aspect="9/19" className="w-full h-full" />
            </div>
            <span
              className="absolute -bottom-3.5 -right-4 px-4 py-2 rounded-xl font-body font-bold text-sm"
              style={{
                background: "var(--color-card-2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-success)",
                boxShadow: "0 12px 30px -12px rgba(0,0,0,.7)",
              }}
            >
              +250 coin 🪙
            </span>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}

const coinStyle: React.CSSProperties = {
  background: "radial-gradient(circle at 35% 30%, #ffe08a, #F6C344 55%, #c98f14)",
  boxShadow: "0 0 26px rgba(246,195,68,.5)",
};

function Stat({
  value,
  suffix,
  suffixColor = "#22D3C5",
  label,
}: {
  value: string;
  suffix?: string;
  suffixColor?: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-heading font-extrabold text-2xl text-white">
        {value}
        {suffix && <span style={{ color: suffixColor }}>{suffix}</span>}
      </div>
      <div className="font-body font-medium text-[13px] text-text-muted mt-0.5">{label}</div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12.9c0-2 1-3 1.7-3.5-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .6 1 1.4 2.1 2.4 2 .9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-1 2.2-2 .4-.6.6-1.2.8-1.8-1.8-.7-2.5-2.4-2.5-3.7Z" />
      <path d="M14.5 6.2c.6-.7 1-1.6.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.5-.9 2.5 1 .1 1.9-.5 2.5-1.2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 4 12 8-12 8V4Z" />
    </svg>
  );
}
