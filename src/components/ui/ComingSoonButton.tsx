"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";

export default function ComingSoonButton({
  className,
  children,
  message = "Yakında! App Store'da 🚀",
}: {
  className?: string;
  children: ReactNode;
  message?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <span className="relative inline-flex">
      <button type="button" onClick={() => setShow(true)} className={className}>
        {children}
      </button>
      <span
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 z-10"
        style={{
          background: "var(--color-card-2)",
          border: "1px solid var(--color-border)",
          color: "var(--color-secondary)",
          opacity: show ? 1 : 0,
          transform: show ? "translate(-50%, 0)" : "translate(-50%, -6px)",
          pointerEvents: "none",
        }}
      >
        {message}
      </span>
    </span>
  );
}
