import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: { title: "Galeri", imageLabel: (i: number) => `Galeri görseli ${i}` },
  en: { title: "Gallery", imageLabel: (i: number) => `Gallery image ${i}` },
};

export default function Gallery({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">{t.title}</h2>
      </Reveal>
      <div className="grid gap-4 md:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <ImagePlaceholder label={t.imageLabel(i + 1)} aspect="1/1" radius={16} className="w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
