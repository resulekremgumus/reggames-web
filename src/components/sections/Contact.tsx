"use client";

import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { getGame } from "@/lib/games";
import { Locale, localePaths } from "@/lib/i18n";

const yetishPlay = getGame("yetish").stores.googlePlay;

const dict = {
  tr: {
    heading: "Şehre koşmaya hazır mısın?",
    studioHeading: "Bir fikrin ya da sorun mu var? Yaz bize.",
    download: "Ücretsiz İndir",
    games: "Oyunlarımız",
    about: "Hakkımızda",
    namePh: "Ad",
    emailPh: "E-posta",
    messagePh: "Mesaj",
    send: "Gönder",
  },
  en: {
    heading: "Ready to start running?",
    studioHeading: "Got an idea or a question? Write to us.",
    download: "Download Free",
    games: "Our games",
    about: "About",
    namePh: "Name",
    emailPh: "Email",
    messagePh: "Message",
    send: "Send",
  },
};

// variant="studio": ana sayfa (oyunlara yönlendirir); variant="yetish": Yetish sayfası (indirmeye yönlendirir).
export default function Contact({
  locale = "tr",
  variant = "yetish",
}: {
  locale?: Locale;
  variant?: "studio" | "yetish";
}) {
  const t = dict[locale];
  const showGamesLink = variant === "studio" || !yetishPlay.live || !yetishPlay.url;
  return (
    <section id="iletisim" className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[26px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
          style={{ background: "linear-gradient(135deg,#0f2b3f,#0c1a2e)" }}
        >
          <span
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(34,211,197,.25), transparent 70%)" }}
          />

          <div className="relative">
            <h2 className="font-heading font-extrabold text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] mb-5">
              {variant === "studio" ? t.studioHeading : t.heading}
            </h2>
            <div className="flex flex-wrap gap-3.5">
              {showGamesLink ? (
                <Link
                  href={localePaths[locale].games}
                  className="rg-btn-primary px-6 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base no-underline"
                >
                  {t.games}
                </Link>
              ) : (
                <a
                  href={yetishPlay.url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-btn-primary px-6 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base no-underline"
                >
                  {t.download}
                </a>
              )}
              <Link href={localePaths[locale].about} className="rg-btn-ghost px-6 py-4 bg-transparent text-white border border-border rounded-[13px] font-body font-semibold text-base no-underline">
                {t.about}
              </Link>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder={t.namePh}
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <input
              type="email"
              placeholder={t.emailPh}
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <textarea
              placeholder={t.messagePh}
              rows={3}
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none resize-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <button
              type="submit"
              className="rg-btn-primary mt-1 px-6 py-3.5 rounded-xl font-body font-bold text-sm"
              style={{ background: "var(--color-secondary)", color: "var(--color-cta-on-secondary)" }}
            >
              {t.send}
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
