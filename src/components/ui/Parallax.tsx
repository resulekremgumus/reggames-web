"use client";

import { useEffect, useRef } from "react";
import { ReactNode } from "react";

export default function Parallax({
  depth,
  children,
  className = "",
  style,
}: {
  depth: number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * depth;
      const y = (e.clientY / window.innerHeight - 0.5) * depth;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [depth]);

  return (
    <div ref={ref} className={className} style={{ transition: "transform .2s ease-out", ...style }}>
      {children}
    </div>
  );
}
