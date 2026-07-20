import Reveal from "@/components/ui/Reveal";

const roadmap = [
  { quarter: "03.2026", title: "ANDROID'DE YAYINDA", text: "Yetish Google Play'de yayında, App Store yakında.", live: true },
  { quarter: "06.2026", title: "Sıralama & Turnuva", text: "Haftalık liderlik tablosu ve turnuvalar." },
  { quarter: "2027", title: "Yeni Şehir", text: "Yeni bir şehir düşünülüyor, detaylar ilerleyen süreçte paylaşılacak." },
  { quarter: "2027", title: "İkinci Oyun", text: "Stüdyonun yeni oyunu duyurulacak." },
];

export default function Roadmap() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)]" style={{ background: "var(--color-bg-alt)" }}>
      <div className="max-w-[1160px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Yol Haritası</h2>
        </Reveal>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))" }}>
          {roadmap.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div
                className="h-full p-6 rounded-2xl border"
                style={{
                  background: "var(--color-card)",
                  borderColor: r.live ? "var(--color-primary)" : "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-body font-bold text-xs tracking-[0.1em] text-text-muted uppercase">{r.quarter}</span>
                  {r.live && <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-success)" }} />}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: r.live ? "var(--color-success)" : "white" }}>
                  {r.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
