import { ReactNode } from "react";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: { eyebrow: "Yasal", updatedLabel: "Son güncelleme" },
  en: { eyebrow: "Legal", updatedLabel: "Last updated" },
};

export default function LegalPage({
  title,
  updated,
  locale = "tr",
  children,
}: {
  title: string;
  updated: string;
  locale?: Locale;
  children: ReactNode;
}) {
  const t = dict[locale];
  return (
    <section className="px-[clamp(18px,5vw,52px)] pt-[132px] pb-[clamp(64px,9vw,112px)] max-w-[760px] mx-auto">
      <span className="font-body font-bold text-[13px] tracking-[0.16em] text-primary uppercase">{t.eyebrow}</span>
      <h1 className="font-heading font-black text-[clamp(38px,5.5vw,62px)] mt-3 mb-2">{title}</h1>
      <p className="text-text-muted text-sm mb-10">
        {t.updatedLabel}: {updated}
      </p>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-[22px] mb-3">{title}</h2>
      <div className="text-text-body text-base leading-[1.75] flex flex-col gap-3">{children}</div>
    </div>
  );
}
