import ComingSoonButton from "@/components/ui/ComingSoonButton";
import { AppleIcon, PlayIcon } from "@/components/ui/StoreIcons";
import { Game, StoreKey, isStoreLive, storeLabels } from "@/lib/games";
import { Locale } from "@/lib/i18n";

const soon = {
  tr: { chip: "Yakında", message: (store: string) => `Yakında ${store}'da 🚀` },
  en: { chip: "Soon", message: (store: string) => `Coming soon to ${store} 🚀` },
};

// Mağaza düğmesi: bağlantı games.ts'de canlıysa gerçek link, değilse "Yakında" rozetli pasif düğme.
// `className` verilirse varsayılan görünüm yerine o kullanılır (ör. Yetish Hero'su).
export default function StoreButton({
  game,
  store,
  locale = "tr",
  size = "md",
  className,
}: {
  game: Game;
  store: StoreKey;
  locale?: Locale;
  size?: "sm" | "md";
  className?: string;
}) {
  const link = game.stores[store];
  const label = storeLabels[store][locale].name;
  const Icon = store === "appStore" ? AppleIcon : PlayIcon;
  const pad = size === "sm" ? "px-4 py-2.5 text-sm gap-2 rounded-[11px]" : "px-6 py-4 text-base gap-2.5 rounded-[13px]";
  const iconSize = size === "sm" ? 17 : 20;

  if (isStoreLive(link)) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className ?? `rg-btn-primary inline-flex items-center font-body font-bold no-underline ${pad}`}
        style={className ? undefined : { background: game.theme.accent, color: game.theme.onAccent }}
      >
        <Icon size={iconSize} /> {label}
      </a>
    );
  }

  return (
    <ComingSoonButton
      message={soon[locale].message(label)}
      className={
        className ??
        `inline-flex items-center font-body font-semibold bg-transparent text-text-body border cursor-pointer ${pad}`
      }
      style={className ? undefined : { borderColor: "var(--color-border)" }}
      ariaLabel={`${label}: ${soon[locale].chip}`}
    >
      <Icon size={iconSize} /> {label}
      {!className && (
        <span
          className="ml-1 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-[0.06em]"
          style={{ background: "rgba(255,255,255,.08)", color: game.theme.accent }}
        >
          {soon[locale].chip}
        </span>
      )}
    </ComingSoonButton>
  );
}
