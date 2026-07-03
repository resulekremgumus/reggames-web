"use client";

import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="px-[clamp(18px,5vw,52px)] py-[clamp(64px,9vw,112px)] max-w-[1160px] mx-auto">
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
              Şehre koşmaya hazır mısın?
            </h2>
            <div className="flex flex-wrap gap-3.5">
              <a href="#" className="rg-btn-primary px-6 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base no-underline">
                Ücretsiz İndir
              </a>
              <Link href="/hakkimizda" className="rg-btn-ghost px-6 py-4 bg-transparent text-white border border-border rounded-[13px] font-body font-semibold text-base no-underline">
                Hakkımızda
              </Link>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Ad"
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <input
              type="email"
              placeholder="E-posta"
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <textarea
              placeholder="Mesaj"
              rows={3}
              className="px-4 py-3.5 rounded-xl bg-transparent border text-white placeholder:text-text-muted outline-none resize-none"
              style={{ borderColor: "var(--color-border)" }}
            />
            <button
              type="submit"
              className="rg-btn-primary mt-1 px-6 py-3.5 rounded-xl font-body font-bold text-sm"
              style={{ background: "var(--color-secondary)", color: "var(--color-cta-on-secondary)" }}
            >
              Gönder
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
