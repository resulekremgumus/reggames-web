import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Veri Silme — RegGames",
};

export default function DataDeletionPage() {
  return (
    <LegalPage title="Veri Silme" updated="Temmuz 5, 2026">
      <LegalSection title="Hesap ve Liderlik Tablosu Verileri">
        <p>
          Yetish içindeki <strong>Ayarlar</strong> menüsünden <strong>&quot;Hesabı Sil&quot;</strong> seçeneğini kullanarak Unity Gaming Services (UGS) üzerindeki anonim liderlik tablosu hesabınızı ve ilgili tüm verileri kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz.
        </p>
      </LegalSection>

      <LegalSection title="Cihaz Verilerinin Silinmesi">
        <p>
          Firebase Firestore&apos;da cihaz bazlı anonim kimlik üzerinden saklanan oyun ilerleme verilerinizin (coin/gem bakiyesi, skor, satın alınan içerikler vb.) silinmesini talep etmek için bize{" "}
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>{" "}
          adresinden ulaşabilirsiniz.
        </p>
        <p>Talebinizde hangi platformu (iOS/Android) ve varsa oyun içi kullanıcı adınızı belirtmeniz, işleminizi hızlandırır.</p>
      </LegalSection>

      <LegalSection title="Üçüncü Taraf Hizmetler">
        <p>
          Reklam ve analitik amacıyla kullanılan üçüncü taraf hizmetlerin (Unity LevelPlay, Google Play Services) topladığı veriler için ilgili hizmet sağlayıcının kendi veri silme araçları ve gizlilik politikası kullanılmalıdır. Detaylar için{" "}
          <a href="/gizlilik" className="text-primary">
            Gizlilik Politikası
          </a>{" "}
          sayfamıza bakabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="İşlem Süresi">
        <p>Silme talepleri en geç 30 gün içinde sonuçlandırılır. İşlem tamamlandığında bilgilendirme e-postası gönderilir.</p>
      </LegalSection>
    </LegalPage>
  );
}
