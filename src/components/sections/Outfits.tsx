import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: {
    heading: "Kostümler",
    subheading: "Seviye atla, yeni kostümlerin kilidini aç.",
    imageLabel: (name: string) => `${name} kostüm (1:1)`,
    outfits: [
      { name: "Klasik", status: "Açık", color: "var(--color-success)" },
      { name: "Kırmızı Rüzgar", status: "Lv.8", color: "var(--color-secondary)" },
      { name: "Gece Modu", status: "Lv.15", color: "var(--color-secondary)" },
      { name: "Altın", status: "🔒 Lv.25", color: "var(--color-text-muted)" },
    ],
  },
  en: {
    heading: "Outfits",
    subheading: "Level up to unlock new outfits.",
    imageLabel: (name: string) => `${name} outfit (1:1)`,
    outfits: [
      { name: "Classic", status: "Unlocked", color: "var(--color-success)" },
      { name: "Red Wind", status: "Lv.8", color: "var(--color-secondary)" },
      { name: "Night Mode", status: "Lv.15", color: "var(--color-secondary)" },
      { name: "Gold", status: "🔒 Lv.25", color: "var(--color-text-muted)" },
    ],
  },
};

export default function Outfits({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-2">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">{t.heading}</h2>
      </Reveal>
      <Reveal className="text-center mb-10">
        <p className="text-text-muted text-sm">{t.subheading}</p>
      </Reveal>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))" }}>
        {t.outfits.map((o, i) => (
          <Reveal key={o.name} delay={i * 0.06}>
            <div className="relative rounded-2xl border overflow-hidden" style={{ background: "var(--color-card-2)", borderColor: "var(--color-border)" }}>
              <ImagePlaceholder label={t.imageLabel(o.name)} aspect="1/1" radius={0} className="w-full" />
              <span
                className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--color-bg-dark)", color: o.color }}
              >
                {o.status}
              </span>
              <div className="p-3 font-heading font-semibold text-sm">{o.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
