import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Data Deletion — RegGames",
};

export default function DataDeletionPageEn() {
  return (
    <LegalPage title="Data Deletion" updated="July 5, 2026" locale="en">
      <LegalSection title="Account and Leaderboard Data">
        <p>
          You can permanently delete your anonymous Unity Gaming Services (UGS) leaderboard account and all related data using the <strong>&quot;Delete Account&quot;</strong> option in the <strong>Settings</strong> menu inside Yetish. This action cannot be undone.
        </p>
      </LegalSection>

      <LegalSection title="Deleting Device Data">
        <p>
          To request deletion of your game progress data (coin/gem balance, score, purchased content, etc.) stored in Firebase Firestore under a device-based anonymous identifier, contact us at{" "}
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>
          .
        </p>
        <p>Including your platform (iOS/Android) and, if applicable, your in-game username speeds up processing.</p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          For data collected by third-party services used for advertising and analytics (Unity LevelPlay, Google Play Services), please use that provider&apos;s own data deletion tools and privacy policy. See our{" "}
          <a href="/en/privacy" className="text-primary">
            Privacy Policy
          </a>{" "}
          page for details.
        </p>
      </LegalSection>

      <LegalSection title="Processing Time">
        <p>Deletion requests are processed within 30 days at the latest. A confirmation email is sent once the request is complete.</p>
      </LegalSection>
    </LegalPage>
  );
}
