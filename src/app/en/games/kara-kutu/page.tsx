import KaraKutuPage from "@/components/kara-kutu/KaraKutuPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  page: "karaKutu",
  title: "Kara Kutu — Tangram puzzle | RegGames",
  description:
    "Fill the black box. A tangram-style shape puzzle: 70 levels across 6 chapters, plus endless Rush and Blast modes. In English and Turkish.",
  image: "/og/kara-kutu-en.jpg",
});

export default function Page() {
  return <KaraKutuPage locale="en" />;
}
