import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Şartları — RegGames",
};

export default function TermsPage() {
  return (
    <LegalPage title="Kullanım Şartları" updated="2 Temmuz 2026">
      <LegalSection title="Kabul">
        <p>Yetish&apos;i indirerek ve kullanarak bu kullanım şartlarını kabul etmiş olursunuz.</p>
      </LegalSection>
      <LegalSection title="Kullanım Lisansı">
        <p>RegGames size Yetish&apos;i kişisel, ticari olmayan amaçlarla kullanma hakkı tanır.</p>
      </LegalSection>
      <LegalSection title="Sorumluluk Reddi">
        <p>Oyun &quot;olduğu gibi&quot; sunulur. RegGames, kesintisiz veya hatasız çalışmayı garanti etmez.</p>
      </LegalSection>
      <LegalSection title="İletişim">
        <p>
          Sorularınız için{" "}
          <a href="mailto:merhaba@reggames.net" className="text-primary">
            merhaba@reggames.net
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
