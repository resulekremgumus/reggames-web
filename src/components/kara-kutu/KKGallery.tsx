import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { kk } from "@/components/kara-kutu/content";
import { Locale } from "@/lib/i18n";

export default function KKGallery({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale].gallery;
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="kk-heading font-extrabold text-[clamp(30px,4vw,50px)]">{t.title}</h2>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {t.shots.map((s, i) => (
          <Reveal key={s.file} delay={i * 0.05}>
            <div className="relative w-full overflow-hidden rounded-2xl border" style={{ aspectRatio: "1/2", borderColor: "var(--color-border)" }}>
              <Image
                src={`/images/kara-kutu/${locale}/${s.file}.webp`}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
