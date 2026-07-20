import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Hakkımızda — RegGames",
  description: "RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosudur.",
};

const values = [
  { n: "01", title: "Yerellik", text: "İstanbul'un dokusunu her oyunumuza taşıyoruz." },
  { n: "02", title: "Sadelik", text: "Karmaşık değil, akılda kalıcı deneyimler tasarlıyoruz." },
  { n: "03", title: "Özen", text: "Her detay — piksel piksel, seviye seviye — özenle işleniyor." },
];

const team = ["Resul Ekrem Gümüş"];

export default function AboutPage() {
  return (
    <>
      <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[900px] md:max-w-[1100px] mx-auto text-center">
        <Reveal>
          <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">Hakkımızda</span>
          <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-5">İstanbul&apos;dan dünyaya oyun</h1>
          <p className="text-text-body text-base md:text-lg max-w-[640px] mx-auto">
            RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosudur. Şehrin enerjisini, sokaklarını ve ritmini oyunlara dönüştürüyoruz.
          </p>
        </Reveal>
      </section>

      <section className="px-[clamp(18px,5vw,52px)] pb-[clamp(64px,9vw,112px)] max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full p-8 rounded-2xl border" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="font-heading font-bold text-2xl mb-3">Vizyon</h2>
              <p className="text-text-body leading-relaxed">
                İstanbul&apos;un ruhunu global mobil oyun sahnesine taşıyan, dünya standartlarında bir stüdyo olmak.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full p-8 rounded-2xl border" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
              <div className="text-3xl mb-4">🚀</div>
              <h2 className="font-heading font-bold text-2xl mb-3">Misyon</h2>
              <p className="text-text-body leading-relaxed">
                Basit, bağımlılık yaratan ve görsel olarak özenli mobil oyunlar üretmek.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[clamp(18px,5vw,52px)] pb-[clamp(64px,9vw,112px)] max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Bizi biz yapan değerler</h2>
        </Reveal>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.06}>
              <div className="h-full p-7 rounded-2xl border" style={{ background: "var(--color-card-3)", borderColor: "var(--color-border)" }}>
                <div className="font-heading font-black text-3xl text-primary mb-3">{v.n}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-text-body text-[15px] leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[clamp(18px,5vw,52px)] pb-[clamp(64px,9vw,112px)] max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Ekip</h2>
        </Reveal>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))" }}>
          {team.map((name, i) => (
            <Reveal key={name} delay={i * 0.06} className="text-center">
              <ImagePlaceholder label="Ekip fotoğrafı" shape="circle" className="w-[120px] h-[120px] mx-auto mb-3" />
              <div className="font-heading font-semibold text-base">{name}</div>
              <div className="text-text-muted text-sm">Kurucu</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
