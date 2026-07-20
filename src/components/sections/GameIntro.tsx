import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: {
    imageLabel: "Oynanış görseli (4:3)",
    eyebrow: "Oyunu Tanı",
    title: "Şehir durmaz, sen de durma.",
    description:
      "Yetish, seni hız kesmeyen bir sonsuz koşuya davet ediyor. Coin topla, engellerden kaç ve mesafe arttıkça devreye giren yeni engel desenleriyle mücadele et.",
    items: [
      "Mesafe arttıkça zorlaşan, elle tasarlanmış onlarca engel deseni",
      "4 farklı karakter ve açılabilir kostümler",
      "Çevrimdışı oynanabilir — internet olmadan da koş",
    ],
  },
  en: {
    imageLabel: "Gameplay screenshot (4:3)",
    eyebrow: "Meet the Game",
    title: "The city never stops, and neither should you.",
    description:
      "Yetish invites you to a relentless endless run. Collect coins, dodge obstacles, and take on new obstacle patterns that kick in as you go further.",
    items: [
      "Dozens of hand-crafted obstacle patterns that get harder with distance",
      "4 different characters with unlockable outfits",
      "Play offline — keep running even without internet",
    ],
  },
};

export default function GameIntro({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[.95fr_1.05fr] gap-14 items-center">
        <Reveal className="relative">
          <ImagePlaceholder label={t.imageLabel} aspect="4/3" radius={20} className="w-full" />
          <span
            className="rg-spin3d absolute -top-4 -left-4 w-[46px] h-[46px] rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffe08a, #F6C344 55%, #c98f14)",
              boxShadow: "0 0 22px rgba(246,195,68,.5)",
              animationDuration: "5s",
            }}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">
            {t.eyebrow}
          </span>
          <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em] mt-3 mb-4">
            {t.title}
          </h2>
          <p className="text-text-body text-base md:text-lg leading-[1.7] mb-6 max-w-[520px]">
            {t.description}
          </p>
          <ul className="flex flex-col gap-3">
            {t.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-body text-[15px]">
                <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-md shrink-0" style={{ background: "rgba(34,211,197,.12)", color: "var(--color-primary)" }}>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
