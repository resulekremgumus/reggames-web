import Reveal from "@/components/ui/Reveal";

const features = [
  { icon: "👆", bg: "rgba(34,211,197,.14)", title: "Tek Dokunuş", text: "Sıçra, kay, koş — tüm kontroller tek parmakla." },
  { icon: "🏙️", bg: "rgba(246,195,68,.14)", title: "İstanbul Atmosferi", text: "Tanıdık semtler, vapurlar ve sokak sesleri." },
  { icon: "🔺", bg: "rgba(50,213,131,.14)", title: "Low-Poly Estetik", text: "Sade, şık, modern görsel dil." },
  { icon: "📴", bg: "rgba(34,211,197,.14)", title: "Offline Oynanır", text: "İnternetin olmadığı yerde bile koşmaya devam." },
];

export default function Features() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-12">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Neden Yetish?</h2>
      </Reveal>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
        {features.map((f, i) => (
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
