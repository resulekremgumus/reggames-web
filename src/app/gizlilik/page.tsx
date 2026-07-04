import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — RegGames",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="2 Temmuz 2026">
      <LegalSection title="Topladığımız Bilgiler">
        <p>
          Yetish&apos;i kullanırken cihaz bilgileri, oyun içi ilerleme verileri ve isteğe bağlı olarak paylaştığınız iletişim bilgilerini (ad, e-posta) topluyoruz.
        </p>
      </LegalSection>
      <LegalSection title="Bilgilerin Kullanımı">
        <p>Topladığımız veriler yalnızca oyun deneyimini iyileştirmek, hata ayıklamak ve size destek sağlamak için kullanılır.</p>
      </LegalSection>
      <LegalSection title="Üçüncü Taraflarla Paylaşım">
        <p>Kişisel verileriniz yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.</p>
      </LegalSection>
      <LegalSection title="İletişim">
        <p>
          Sorularınız için bize{" "}
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>{" "}
          adresinden ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
