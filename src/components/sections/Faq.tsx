"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n";

const dict = {
  tr: {
    heading: "Sıkça Sorulan Sorular",
    faqs: [
      { q: "Yetish ücretsiz mi?", a: "Evet, Yetish indirmesi ve oynanışı tamamen ücretsizdir. İsteğe bağlı kozmetik satın alımlar mevcuttur." },
      { q: "Hangi platformlarda oynanabilir?", a: "iOS (App Store) ve Android (Google Play) üzerinde oynanabilir." },
      { q: "Çevrimdışı oynanabilir mi?", a: "Evet, internet bağlantısı olmadan da oynayabilirsin." },
      { q: "RegGames nerede?", a: "RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosudur." },
    ],
  },
  en: {
    heading: "Frequently Asked Questions",
    faqs: [
      { q: "Is Yetish free?", a: "Yes, downloading and playing Yetish is completely free. Optional cosmetic purchases are available." },
      { q: "Which platforms can I play on?", a: "You can play on iOS (App Store) and Android (Google Play)." },
      { q: "Can I play offline?", a: "Yes, you can play without an internet connection." },
      { q: "Where is RegGames based?", a: "RegGames is an independent mobile game studio based in İstanbul." },
    ],
  },
};

export default function Faq({ locale = "tr" }: { locale?: Locale }) {
  const [open, setOpen] = useState<number | null>(0);
  const t = dict[locale];

  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[820px] mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(30px,4vw,52px)] tracking-[-0.02em]">{t.heading}</h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {t.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer bg-transparent border-0"
                >
                  <span className="font-heading font-semibold text-base text-white">{f.q}</span>
                  <span
                    className="text-primary text-xl transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="px-6 overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p className="text-text-body text-sm leading-relaxed pb-5">{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
