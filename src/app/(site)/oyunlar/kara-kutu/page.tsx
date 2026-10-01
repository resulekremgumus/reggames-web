import KaraKutuPage from "@/components/kara-kutu/KaraKutuPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "tr",
  page: "karaKutu",
  title: "Kara Kutu — Tangram bulmaca | RegGames",
  description:
    "Kara kutuyu parçalarla doldur. Tangram esinli şekil bulmacası: 6 bölümde 70 seviye, Seri ve Patlama sonsuz modları. Türkçe ve İngilizce.",
  image: "/og/kara-kutu-tr.jpg",
});

export default function Page() {
  return <KaraKutuPage locale="tr" />;
}
