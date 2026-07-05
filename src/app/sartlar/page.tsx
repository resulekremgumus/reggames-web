import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Şartları — RegGames",
};

export default function TermsPage() {
  return (
    <LegalPage title="Kullanım Şartları" updated="5 Temmuz 2026">
      <LegalSection title="Kabul">
        <p>
          Yetish uygulamasını indirerek ve kullanarak bu kullanım şartlarını kabul etmiş olursunuz.
        </p>
      </LegalSection>

      <LegalSection title="Kullanım Lisansı">
        <p>
          RegGames size Yetish&apos;i kişisel, ticari olmayan amaçlarla kullanma hakkı tanır.
          Bu lisans kapsamında şunlar yasaktır:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Uygulamayı kopyalamak veya değiştirmek</li>
          <li>Uygulamayı ticari amaçla kullanmak veya dağıtmak</li>
          <li>Uygulamanın kaynak kodunu tersine mühendislik ile elde etmeye çalışmak</li>
        </ul>
      </LegalSection>

      <LegalSection title="Liderlik Tablosu ve Kullanıcı Adı">
        <p>
          Liderlik tablosuna katılmak için bir kullanıcı adı belirlemeniz gerekmektedir. Kullanıcı adınız:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>En az 3, en fazla 12 karakter olmalıdır</li>
          <li>Yalnızca harf, rakam ve Türkçe karakterlerden oluşmalıdır</li>
          <li>Hakaret, küfür veya uygunsuz ifade içeremez</li>
          <li>Başka bir kişi veya markayı taklit edemez</li>
        </ul>
        <p>
          RegGames, kurallara aykırı kullanıcı adlarını veya skorları liderlik tablosundan kaldırma hakkını saklı tutar.
        </p>
      </LegalSection>

      <LegalSection title="Hile ve Kötüye Kullanım">
        <p>
          Oyun içinde hile, bot, exploit veya yetkisiz araç kullanımı yasaktır.
          Bu tür kullanımlar tespit edildiğinde ilgili veriler liderlik tablosundan silinebilir.
        </p>
      </LegalSection>

      <LegalSection title="Sorumluluk Reddi">
        <p>
          Uygulama &quot;olduğu gibi&quot; sunulur. RegGames, uygulamanın kesintisiz veya hatasız çalışacağını
          garanti etmez. Uygulama kullanımından doğabilecek doğrudan veya dolaylı zararlardan RegGames sorumlu tutulamaz.
        </p>
      </LegalSection>

      <LegalSection title="Değişiklikler">
        <p>
          RegGames bu şartları önceden bildirim yapmaksızın güncelleme hakkını saklı tutar.
          Güncel şartlar bu sayfada yayımlanır. Uygulamayı kullanmaya devam etmeniz, güncel şartları kabul ettiğiniz anlamına gelir.
        </p>
      </LegalSection>

      <LegalSection title="İletişim">
        <p>
          Sorularınız için{" "}
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>{" "}
          adresine ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
