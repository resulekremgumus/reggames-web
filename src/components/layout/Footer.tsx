import Link from "next/link";
import ComingSoonButton from "@/components/ui/ComingSoonButton";

const stars = [
  { top: "10%", left: "8%", delay: "0s" },
  { top: "30%", left: "22%", delay: "0.6s" },
  { top: "18%", left: "40%", delay: "1.2s" },
  { top: "50%", left: "60%", delay: "0.3s" },
  { top: "70%", left: "78%", delay: "0.9s" },
  { top: "35%", left: "88%", delay: "1.5s" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg-dark px-[clamp(18px,5vw,52px)] pt-16 pb-8">
      {stars.map((s, i) => (
        <span
          key={i}
          className="rg-twinkle absolute w-[3px] h-[3px] rounded-full bg-white"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      <div className="relative max-w-[1160px] mx-auto grid gap-10 grid-cols-1 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="inline-block w-[22px] h-[22px] rounded-[5px] rotate-45"
              style={{ background: "linear-gradient(135deg,#22D3C5,#0fa89c)" }}
            />
            <span className="font-heading font-extrabold text-lg text-white">
              REG<span className="text-primary">GAMES</span>
            </span>
          </div>
          <p className="text-text-muted text-sm max-w-[220px]">
            İstanbul&apos;dan dünyaya, sonsuz koşulu mobil oyunlar.
          </p>
          <div className="flex gap-2 mt-5">
            {["X", "IG", "DC"].map((s) => (
              <span
                key={s}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-[10px] border border-border text-text-muted text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <FooterCol
          title="Oyun"
          links={[
            { href: "/oyunlar", label: "Oyunlar" },
            { href: "#", label: "App Store", comingSoon: true },
            {
              href: "https://play.google.com/store/apps/details?id=com.reggames.yetish&hl=tr",
              label: "Google Play",
              external: true,
            },
          ]}
        />
        <FooterCol title="Stüdyo" links={[{ href: "/hakkimizda", label: "Hakkımızda" }]} />
        <FooterCol
          title="Yasal"
          links={[
            { href: "/gizlilik", label: "Gizlilik Politikası" },
            { href: "/sartlar", label: "Kullanım Şartları" },
            { href: "/404", label: "404" },
          ]}
        />
      </div>

      <div
        className="relative max-w-[1160px] mx-auto mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs text-text-faint"
        style={{ borderColor: "var(--color-border-thin-2)" }}
      >
        <span>© {year} RegGames. Tüm hakları saklıdır.</span>
        <span>Made with ♥ in İstanbul</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean; comingSoon?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-heading font-bold text-sm text-white mb-4">{title}</h4>
      <div className="flex flex-col gap-3">
        {links.map((l) =>
          l.comingSoon ? (
            <ComingSoonButton
              key={l.label}
              className="text-left text-text-muted text-sm hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              {l.label}
            </ComingSoonButton>
          ) : l.external ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-sm hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href} className="text-text-muted text-sm hover:text-white transition-colors">
              {l.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
