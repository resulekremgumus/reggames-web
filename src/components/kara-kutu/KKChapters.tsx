import Reveal from "@/components/ui/Reveal";
import { kk } from "@/components/kara-kutu/content";
import { Locale } from "@/lib/i18n";

export default function KKChapters({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale].chapters;
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="mb-10">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
        <h2 className="kk-heading font-extrabold text-[clamp(30px,4vw,50px)] mt-2">{t.title}</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {t.items.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05} className="h-full">
            <div className="rg-lift h-full flex gap-5 p-6 rounded-2xl border" style={{ background: "var(--kk-panel)", borderColor: "var(--color-border)" }}>
              <span
                className="kk-heading font-extrabold text-[22px] w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,176,46,.12)", color: "var(--kk-amber)" }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="kk-heading font-bold text-xl uppercase tracking-[0.04em] mb-1">{c.name}</h3>
                <p className="text-text-body text-[15px] leading-relaxed">{c.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
