import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — RegGames",
};

export default function TermsPageEn() {
  return (
    <LegalPage title="Terms of Use" updated="July 5, 2026" locale="en">
      <LegalSection title="Acceptance">
        <p>By downloading and using the Yetish app, you agree to these terms of use.</p>
      </LegalSection>

      <LegalSection title="License to Use">
        <p>
          RegGames grants you the right to use Yetish for personal, non-commercial purposes.
          Under this license, you may not:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Copy or modify the app</li>
          <li>Use or distribute the app for commercial purposes</li>
          <li>Attempt to reverse-engineer the app&apos;s source code</li>
        </ul>
      </LegalSection>

      <LegalSection title="Leaderboard and Username">
        <p>To join the leaderboard, you must choose a username. Your username:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Must be between 3 and 12 characters</li>
          <li>May only contain letters, numbers, and Turkish characters</li>
          <li>Must not contain insults, profanity, or inappropriate language</li>
          <li>Must not impersonate another person or brand</li>
        </ul>
        <p>RegGames reserves the right to remove usernames or scores that violate these rules from the leaderboard.</p>
      </LegalSection>

      <LegalSection title="Cheating and Abuse">
        <p>
          Cheating, bots, exploits, or unauthorized tools are prohibited within the game.
          Related data may be removed from the leaderboard if such use is detected.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          The app is provided &quot;as is.&quot; RegGames does not guarantee uninterrupted or error-free operation.
          RegGames is not liable for any direct or indirect damages arising from use of the app.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          RegGames reserves the right to update these terms without prior notice.
          The current terms will be published on this page. Continued use of the app means you accept the current terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions, you can reach us at{" "}
          <a href="mailto:reggamesstudio@gmail.com" className="text-primary">
            reggamesstudio@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
