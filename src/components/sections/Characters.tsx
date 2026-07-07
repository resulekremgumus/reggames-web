import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

const characters = [
  { name: "Arda", image: "/images/characters/arda.png" },
  { name: "Metin", image: "/images/characters/metin.png" },
  { name: "Selin", image: "/images/characters/selin.png" },
  { name: "Zeynep", image: "/images/characters/zeynep.png" },
];

const comingSoonCount = 6;

export default function Characters() {
  return (
    <section
      className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)]"
      style={{ background: "radial-gradient(100% 100% at 50% 0%, #101f36, #09111F 70%)" }}
    >
      <div className="max-w-[1160px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">Karakterler</h2>
        </Reveal>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))" }}>
          {characters.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="rg-lift rounded-2xl border overflow-hidden" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="font-heading font-bold text-base">{c.name}</div>
                </div>
              </div>
            </Reveal>
          ))}

          {Array.from({ length: comingSoonCount }).map((_, i) => (
            <Reveal key={`soon-${i}`} delay={(characters.length + i) * 0.06}>
              <div
                className="relative rounded-2xl border overflow-hidden opacity-70"
                style={{ background: "var(--color-card)", borderColor: "var(--color-border)", borderStyle: "dashed" }}
              >
                <ImagePlaceholder label="" aspect="3/4" radius={0} className="w-full" />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(9,17,31,.55)" }}
                >
                  <span className="font-heading font-bold text-sm tracking-[0.08em] uppercase" style={{ color: "var(--color-secondary)" }}>
                    Yakında
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
