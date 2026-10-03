"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_KEY, GA_ID, OPEN_CONSENT_EVENT } from "@/lib/analytics";
import { localePaths } from "@/lib/i18n";

// Google Analytics yalnızca ziyaretçi "Kabul et" derse yüklenir. Seçim yapılmadan ya da
// reddedilince Google'a hiçbir istek gitmez ve çerez yazılmaz.

type Stored = "granted" | "denied" | "unset" | "server";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): Stored {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : "unset";
  } catch {
    return "unset";
  }
}

function save(value: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Tarayıcı depolamayı engelliyorsa seçim yalnızca bu sayfa için geçerli olur.
  }
  listeners.forEach((l) => l());
}

function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) =>
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
      }),
    );
}

const dict = {
  tr: {
    text: "Siteyi nasıl kullandığını anlamak için Google Analytics çerezleri kullanmak istiyoruz. İzin vermezsen hiçbir analiz çerezi kullanılmaz.",
    more: "Gizlilik Politikası",
    reject: "Reddet",
    accept: "Kabul et",
    label: "Çerez izni",
  },
  en: {
    text: "We'd like to use Google Analytics cookies to understand how the site is used. If you say no, no analytics cookies are used.",
    more: "Privacy Policy",
    reject: "Reject",
    accept: "Accept",
    label: "Cookie consent",
  },
};

export default function CookieConsent() {
  const stored = useSyncExternalStore<Stored>(subscribe, getSnapshot, () => "server");
  const [reopened, setReopened] = useState(false);
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
  const t = dict[locale];

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const choose = (value: "granted" | "denied") => {
    const w = window as unknown as Record<string, unknown>;
    w[`ga-disable-${GA_ID}`] = value === "denied";
    if (value === "denied") clearAnalyticsCookies();
    save(value);
    setReopened(false);
  };

  const showBanner = stored === "unset" || reopened;

  return (
    <>
      {stored === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label={t.label}
          className="fixed z-[55] left-3 right-3 bottom-3 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[min(720px,calc(100vw-48px))] rounded-2xl border p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          style={{
            background: "rgba(14,23,41,.97)",
            borderColor: "var(--color-border)",
            boxShadow: "0 24px 60px -20px rgba(0,0,0,.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-text-body text-sm leading-relaxed flex-1 m-0">
            {t.text}{" "}
            <Link href={localePaths[locale].privacy} className="text-primary font-semibold whitespace-nowrap">
              {t.more}
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl border bg-transparent text-white font-body font-bold text-sm cursor-pointer"
              style={{ borderColor: "var(--color-border)" }}
            >
              {t.reject}
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl border-0 bg-primary text-cta-on-primary font-body font-bold text-sm cursor-pointer"
            >
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
