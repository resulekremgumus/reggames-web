import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const images = [
  { file: "gallery-hero-cta.png", alt: { tr: "Şehirde koşmaya hazır mısın", en: "Ready to start running" } },
  { file: "gallery-character-select.png", alt: { tr: "Kendi karakterini seç", en: "Choose your character" } },
  { file: "gallery-leaderboard.png", alt: { tr: "Liderlik zirvesine çık", en: "Climb the leaderboard" } },
  { file: "gallery-gameplay-run.png", alt: { tr: "Şehirde hızla koş", en: "Run fast through the city" } },
  { file: "gallery-level-up.png", alt: { tr: "Seviyeni yükselt", en: "Level up" } },
  { file: "gallery-obstacles.png", alt: { tr: "Engelleri aş", en: "Dodge the obstacles" } },
  { file: "gallery-high-score.png", alt: { tr: "Rekorunu kır", en: "Beat your high score" } },
];

const dict = {
  tr: { title: "Galeri" },
  en: { title: "Gallery" },
};

export default function Gallery({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">{t.title}</h2>
      </Reveal>
      <div className="grid gap-4 md:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
        {images.map((img, i) => (
          <Reveal key={img.file} delay={i * 0.05}>
            <div className="relative w-full overflow-hidden rounded-2xl border border-border" style={{ aspectRatio: "9/19.5" }}>
              <Image
                src={`/images/gallery/${img.file}`}
                alt={img.alt[locale]}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
