import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";
import { Locale, localePaths } from "@/lib/i18n";

const dict = {
  tr: {
    eyebrow: "Stüdyo",
    title: "Küçük ekip, net fikirler",
    text: "RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosu. Kuralı bir dakikada anlaşılan ama bırakması zor oyunlar yapıyoruz. Yetish ile koşturduk, Kara Kutu ile düşündürüyoruz.",
    link: "Hakkımızda →",
    facts: [
      { value: String(games.length), label: "oyun" },
      { value: "2", label: "dil: Türkçe, İngilizce" },
      { value: "İstanbul", label: "merkez" },
    ],
  },
  en: {
    eyebrow: "Studio",
    title: "Small team, clear ideas",
    text: "RegGames is an independent mobile game studio based in İstanbul. We make games whose rules click in a minute but are hard to put down. Yetish got you running; Kara Kutu gets you thinking.",
    link: "About us →",
    facts: [
      { value: String(games.length), label: "games" },
      { value: "2", label: "languages: Turkish, English" },
      { value: "İstanbul", label: "home base" },
    ],
  },
};

export default function StudioAbout({ locale = "tr" }: { locale?: Locale }) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(48px,7vw,88px)] max-w-[1160px] mx-auto">
      <Reveal>
        <div
          className="rounded-[26px] border p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <div>
            <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] mt-3 mb-4">{t.title}</h2>
            <p className="text-text-body text-base md:text-[17px] leading-[1.7] mb-6 max-w-[560px]">{t.text}</p>
            <Link href={localePaths[locale].about} className="text-primary font-body font-bold text-[15px] no-underline">
              {t.link}
            </Link>
          </div>
          <ul className="flex flex-col gap-4 md:gap-5 border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-10" style={{ borderColor: "var(--color-border)" }}>
            {t.facts.map((f) => (
              <li key={f.label} className="flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-[clamp(26px,3vw,34px)] text-white leading-none">{f.value}</span>
                <span className="text-text-muted text-sm">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
