import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — RegGames",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Gizlilik Politikası / Privacy Policy" updated="Temmuz 5, 2026">
      <LegalSection title="Giriş">
        <p>
          RegGames, mobil uygulama ve oyunlar geliştiren bir yazılım geliştiricisidir. RegGames tarafından sunulan tüm uygulamalar ücretsiz olarak sunulmaktadır.
        </p>
        <p>
          Bu sayfa, RegGames tarafından geliştirilen uygulamaları kullanan kullanıcıları, bilgi toplama, kullanma ve ifşa etmeye ilişkin politikalar hakkında bilgilendirmektedir.
        </p>
      </LegalSection>

      <LegalSection title="Bilgi Toplama ve Kullanımı / Information Collection and Use">
        <p>RegGames uygulamaları; ad, e-posta adresi veya hassas konum verisi gibi kişisel bilgileri doğrudan toplamaz.</p>
        <p>
          Ancak kullanıcı deneyimini iyileştirmek, liderlik tablosu hizmetleri sağlamak, analitik toplamak ve bildirim göndermek amacıyla aşağıdaki üçüncü taraf hizmetlerden yararlanılmaktadır. Bu hizmetler bazı teknik verileri toplayabilir.
        </p>
      </LegalSection>

      <LegalSection title="Üçüncü Taraf Hizmetler / Third-Party Services">
        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-1.5">1. Unity LevelPlay (ironSource) — Reklam Platformu</h3>
          <p>
            Reklam gösterimi ve analitik için kullanılır. Cihaz bilgileri, IP adresi, reklam tanımlayıcıları ve kullanım verileri toplanabilir. Gizlilik politikası:{" "}
            <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary">
              unity.com/legal/privacy-policy
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-1.5">2. Google Play Services</h3>
          <p>
            Gizlilik politikası:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary">
              policies.google.com/privacy
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-1.5">3. Firebase Firestore — Oyuncu Verisi Senkronizasyonu</h3>
          <p>
            Oyun verileri, cihaz bazlı anonim kimlik (<code>SystemInfo.deviceUniqueIdentifier</code>) üzerinden Firebase Firestore&apos;a senkronize edilir. Saklanan veriler şunlardır:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>Anonim cihaz kimliği</li>
            <li>Kullanıcının belirlediği görünen ad (kullanıcı adı)</li>
            <li>Coin ve Gem bakiyeleri</li>
            <li>Satın alınan içerikler ve seçili karakter/kıyafet bilgisi</li>
            <li>Özellik yükseltme seviyeleri (Kalkan, Zıplama)</li>
            <li>En iyi skor ve mesafe</li>
            <li>Günlük ödül durumu</li>
            <li>Oyun oturumu verileri: skor, mesafe, kazanılan coin, tarih/saat, uygulama sürümü</li>
            <li>Hesabın ilk görülme ve son görülme zaman damgaları</li>
          </ul>
          <p>
            Bu veriler yalnızca oyun ilerlemesini korumak ve geliştirici analitiği amacıyla kullanılır; üçüncü taraflarla paylaşılmaz. Firebase gizlilik politikası:{" "}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary">
              firebase.google.com/support/privacy
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-1.5">4. Firebase Cloud Messaging (FCM) — Push Bildirimleri</h3>
          <p>
            Oyun içi bildirimler göndermek amacıyla kullanılır. Kullanıcının dil tercihine göre (Türkçe/İngilizce) topic aboneliği oluşturulur. Bildirim izni uygulama tarafından talep edilir; kullanıcı reddetme veya sonradan ayarlardan kapatma hakkına sahiptir. Firebase gizlilik politikası:{" "}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary">
              firebase.google.com/support/privacy
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-1.5">5. Unity Gaming Services (UGS) — Liderlik Tablosu</h3>
          <p>
            Liderlik tablosu özelliği için Unity Gaming Services kullanılır. Oturum açma işlemi anonim olarak gerçekleştirilir (e-posta veya şifre gerekmez). Aşağıdaki veriler işlenir:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>Anonim oyuncu kimliği (UGS tarafından üretilir)</li>
            <li>Kullanıcının belirlediği görünen ad (en fazla 12 karakter)</li>
            <li>Oyun sonu skor verisi (haftalık, aylık ve tüm zamanlar liderlik tabloları)</li>
            <li>Seçili karakter/kıyafet bilgisi (liderlik tablosunda avatar gösterimi için)</li>
          </ul>
          <p>
            UGS gizlilik politikası:{" "}
            <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary">
              unity.com/legal/privacy-policy
            </a>
          </p>
        </div>
      </LegalSection>

      <LegalSection title="Veri Silme Talepleri">
        <p>
          Kullanıcılar, oyun içindeki Ayarlar menüsünde yer alan &quot;Hesabı Sil&quot; seçeneğini kullanarak liderlik tablosu hesaplarını ve ilgili UGS verilerini kalıcı olarak silebilir. Bu işlem geri alınamaz.
        </p>
        <p>
          Firebase Firestore&apos;da saklanan anonim cihaz verileri için silme talebi{" "}
          <a href="mailto:resul.reg96@gmail.com" className="text-primary">
            resul.reg96@gmail.com
          </a>{" "}
          adresine iletilebilir.
        </p>
        <p>Üçüncü taraf hizmet sağlayıcıların topladığı veriler için ilgili hizmet sağlayıcının gizlilik politikası ve araçları kullanılmalıdır.</p>
      </LegalSection>

      <LegalSection title="Gizlilik Politikasındaki Değişiklikler">
        <p>Bu politika zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanır.</p>
      </LegalSection>

      <LegalSection title="İletişim">
        <p>
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
