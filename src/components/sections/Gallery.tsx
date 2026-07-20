import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

export default function Gallery() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Galeri</h2>
      </Reveal>
      <div className="grid gap-4 md:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <ImagePlaceholder label={`Galeri görseli ${i + 1}`} aspect="1/1" radius={16} className="w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
