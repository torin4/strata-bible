import { LegalH2, LegalLayout } from "@/components/legal/LegalLayout";
import { COMPANY } from "@/lib/company";

export const metadata = {
  title: "Privacy Policy, STRATA",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated={COMPANY.policiesUpdated}>
      <p>
        This policy explains what {COMPANY.name} collects when you use{" "}
        {COMPANY.product}, why, and the choices you have. We keep it to what the
        service needs to work. The reader is usable signed out, and signed out
        we store nothing about you.
      </p>

      <LegalH2>What we collect</LegalH2>
      <p>
        When you sign in, we collect your account identifier and email address,
        and your name if you sign in with Google. When you use account features,
        we store the content you create, such as journal entries, highlights,
        and notes, along with your reading position and settings. If you
        subscribe, we store your subscription status. We do not collect or store
        your card number; payment details are handled by Stripe.
      </p>

      <LegalH2>How we use it</LegalH2>
      <p>
        We use this information to sign you in, to save and sync your journal,
        highlights, and progress across your devices, to process and manage your
        subscription, and to run the AI companion when you ask for it. We do not
        sell your personal information, and we do not use it for advertising.
      </p>

      <LegalH2>The AI companion</LegalH2>
      <p>
        When you ask the companion to draw out a reading, the scripture and the
        short history note for that passage are sent to our AI provider to
        generate the commentary. Your journal entries, notes, and other personal
        writing are not sent to the AI provider.
      </p>

      <LegalH2>Service providers</LegalH2>
      <p>
        We rely on a small set of providers to operate {COMPANY.product}: Google
        Firebase for sign in, data storage, and hosting of background functions;
        Stripe for payments and subscription management; Anthropic for the AI
        companion; and Vercel for hosting the app. Each processes data only as
        needed to provide its part of the service.
      </p>

      <LegalH2>Storage and security</LegalH2>
      <p>
        Your data is stored in Google Firebase and is protected by security
        rules that limit each account to its own data. No system is perfectly
        secure, but we take reasonable measures to protect your information.
      </p>

      <LegalH2>Your choices</LegalH2>
      <p>
        You can view and delete your journal entries, highlights, and notes from
        within the app at any time. To delete your account and the data
        associated with it, contact us and we will remove it. You can cancel a
        subscription at any time from Settings.
      </p>

      <LegalH2>Children</LegalH2>
      <p>
        {COMPANY.product} is not directed to children under 13, and we do not
        knowingly collect their personal information.
      </p>

      <LegalH2>Changes</LegalH2>
      <p>
        If we change this policy, we will update the date above. Material
        changes will be made clear within the app where appropriate.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        Questions about your privacy can be sent to{" "}
        <a
          href={`mailto:${COMPANY.contactEmail}`}
          className="text-gold-bright underline"
        >
          {COMPANY.contactEmail}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
