import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: {
    heading: "Neden Yetish?",
    features: [
      { icon: "👆", bg: "rgba(34,211,197,.14)", title: "Tek Dokunuş", text: "Sıçra, kay, koş — tüm kontroller tek parmakla." },
      { icon: "⚡", bg: "rgba(246,195,68,.14)", title: "Zorlaşan Mücadele", text: "Mesafe arttıkça devreye giren onlarca elle tasarlanmış engel deseni." },
      { icon: "🔺", bg: "rgba(50,213,131,.14)", title: "Low-Poly Estetik", text: "Sade, şık, modern görsel dil." },
      { icon: "📴", bg: "rgba(34,211,197,.14)", title: "Çevrimdışı Oynanır", text: "İnternetin olmadığı yerde bile koşmaya devam." },
    ],
  },
  en: {
    heading: "Why Yetish?",
    features: [
      { icon: "👆", bg: "rgba(34,211,197,.14)", title: "One-Tap Controls", text: "Jump, slide, run — every control with a single finger." },
      { icon: "⚡", bg: "rgba(246,195,68,.14)", title: "Rising Challenge", text: "Dozens of hand-crafted obstacle patterns that kick in as distance grows." },
      { icon: "🔺", bg: "rgba(50,213,131,.14)", title: "Low-Poly Look", text: "A clean, stylish, modern visual language." },
      { icon: "📴", bg: "rgba(34,211,197,.14)", title: "Play Offline", text: "Keep running even where there's no internet." },
    ],
  },
};

export default function Features({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-12">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">{t.heading}</h2>
      </Reveal>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
        {t.features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="rg-lift h-full p-7 rounded-2xl border" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl mb-5" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-text-body text-[15px] leading-relaxed">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
