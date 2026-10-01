import Reveal from "@/components/ui/Reveal";
import { kk } from "@/components/kara-kutu/content";
import { Locale } from "@/lib/i18n";

// Kutunun içi 80x80'lik bir alan (x,y: 20–100). Parçalar bu alanı tam dolduracak şekilde bölünmüş.
const WOOD = "#6A5645";
const stones = ["20,60 20,100 60,100", "80,20 100,20 100,40 80,40"];
const pieces = {
  amber: { points: "20,20 60,20 20,60", fill: "#FFB02E" },
  blue: { points: "60,20 60,60 20,60", fill: "#4A78C9" },
  cream: { points: "60,20 80,20 80,40 60,40", fill: "#F4F1EA" },
  red: { points: "60,40 100,40 100,60 60,60", fill: "#E0675A" },
  orange: { points: "20,60 60,60 60,100", fill: "#FF8A3D" },
  amber2: { points: "60,60 100,60 100,100", fill: "#FFB02E" },
  cream2: { points: "60,60 60,100 100,100", fill: "#E9DFC9" },
};

function Box({ placed, floating }: { placed: (keyof typeof pieces)[]; floating?: keyof typeof pieces }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="8" y="8" width="104" height="104" rx="14" fill="#3B2F25" />
      <rect x="18" y="18" width="84" height="84" rx="4" fill="#07090C" />
      {[40, 60, 80].map((v) => (
        <g key={v} stroke="rgba(255,255,255,.05)" strokeWidth="1">
          <line x1={v} y1="20" x2={v} y2="100" />
          <line x1="20" y1={v} x2="100" y2={v} />
        </g>
      ))}
      {stones.map((p) => (
        <polygon key={p} points={p} fill={WOOD} stroke="#4E3F33" strokeWidth="1" />
      ))}
      {placed.map((k) => (
        <polygon key={k} points={pieces[k].points} fill={pieces[k].fill} stroke="#07090C" strokeWidth="1.2" />
      ))}
      {floating && (
        <>
          <polygon points={pieces[floating].points} fill="none" stroke={pieces[floating].fill} strokeDasharray="3 3" strokeWidth="1.4" />
          {/* Parça elde: kutunun boş köşesinde, yerleşeceği yer kesikli çizgiyle gösteriliyor */}
          <g transform="translate(40,38) rotate(-14 47 47)">
            <polygon points={pieces[floating].points} fill={pieces[floating].fill} stroke="#07090C" strokeWidth="1.2" opacity=".95" />
          </g>
        </>
      )}
    </svg>
  );
}

const illustrations = [
  <Box key="1" placed={[]} />,
  <Box key="2" placed={["amber", "orange", "cream"]} floating="blue" />,
  <Box key="3" placed={["amber", "blue", "cream", "red", "orange", "amber2", "cream2"]} />,
];

export default function KKHowToPlay({ locale = "tr" }: { locale?: Locale }) {
  const t = kk[locale].how;
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal className="text-center mb-12">
        <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
        <h2 className="kk-heading font-extrabold text-[clamp(30px,4vw,50px)] mt-2">{t.title}</h2>
      </Reveal>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.steps.map((step, i) => (
          <li key={step.title} className="list-none">
            <Reveal delay={i * 0.08} className="h-full p-7 rounded-2xl border" style={{ background: "var(--kk-panel)", borderColor: "var(--color-border)" }}>
              <div className="w-[132px] h-[132px] mx-auto mb-6">{illustrations[i]}</div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="kk-heading font-extrabold text-2xl" style={{ color: "var(--kk-amber)" }}>
                  {i + 1}
                </span>
                <h3 className="kk-heading font-bold text-xl">{step.title}</h3>
              </div>
              <p className="text-text-body text-[15px] leading-relaxed">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
