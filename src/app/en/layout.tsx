import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "RegGames — Mobile game studio from İstanbul",
  description:
    "RegGames is an independent mobile game studio based in İstanbul. Our first game, Yetish, is a fast endless runner about dodging obstacles.",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
    </>
  );
}
