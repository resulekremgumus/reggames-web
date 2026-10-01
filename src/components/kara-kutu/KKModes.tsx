import Reveal from "@/components/ui/Reveal";
import { kk } from "@/components/kara-kutu/content";
import { Locale } from "@/lib/i18n";

const accents = ["#FFB02E", "#FF8A3D"];

export default function KKModes({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale].modes;
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(48px,7vw,88px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-10">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
        <h2 className="kk-heading font-extrabold text-[clamp(30px,4vw,50px)] mt-2">{t.title}</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {t.items.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08} className="h-full">
            <div
              className="relative overflow-hidden h-full p-7 md:p-9 rounded-[22px] border"
              style={{
                background: `radial-gradient(120% 90% at 100% 0%, ${accents[i]}22, transparent 60%), var(--kk-panel)`,
                borderColor: `${accents[i]}55`,
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${accents[i]}1f`, color: accents[i] }}
                  aria-hidden="true"
                >
                  {m.icon}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.08em]" style={{ background: "rgba(255,255,255,.06)", color: accents[i] }}>
                  {t.tag}
                </span>
              </div>
              <h3 className="kk-heading font-extrabold text-[clamp(28px,3.4vw,38px)] uppercase tracking-[0.04em] mb-2">{m.name}</h3>
              <p className="text-text-body text-base leading-relaxed mb-5 max-w-[440px]">{m.text}</p>
              <span className="font-body font-bold text-sm" style={{ color: accents[i] }}>
                🏆 {t.best}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
