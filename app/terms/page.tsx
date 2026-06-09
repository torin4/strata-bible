import { LegalH2, LegalLayout } from "@/components/legal/LegalLayout";
import { COMPANY } from "@/lib/company";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service, STRATA",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated={COMPANY.policiesUpdated}>
      <p>
        These terms govern your use of {COMPANY.product}, a reading application
        operated by {COMPANY.name} ("we", "us"). By creating an account or using
        the service, you agree to them. If you do not agree, please do not use
        the service.
      </p>

      <LegalH2>The service</LegalH2>
      <p>
        {COMPANY.product} is a Bible reading app that grounds each passage in
        layers of history, meaning, and reflection. A portion of the content is
        free to read, including signed out. {COMPANY.product} Plus is a paid
        subscription that unlocks the remaining content and an AI companion that
        drafts additional commentary on a reading.
      </p>

      <LegalH2>Your account</LegalH2>
      <p>
        You may sign in with Google or with an email and password. You are
        responsible for keeping your account secure and for activity that occurs
        under it. You must be old enough to form a binding contract in your
        jurisdiction to subscribe.
      </p>

      <LegalH2>Subscriptions and billing</LegalH2>
      <p>
        {COMPANY.product} Plus is offered as a monthly or annual subscription,
        priced in US dollars. Payments are processed by Stripe; we do not store
        your card details. Your subscription renews automatically at the end of
        each period until you cancel. You authorize us, through Stripe, to
        charge your payment method on each renewal at the then current price. We
        will give notice before any price change takes effect.
      </p>

      <LegalH2>Cancellation and refunds</LegalH2>
      <p>
        You can cancel at any time from Settings, which stops future charges;
        you keep access through the end of the period you have paid for. Refund
        details are in our{" "}
        <Link href="/refund-policy" className="text-gold-bright underline">
          Refund Policy
        </Link>
        .
      </p>

      <LegalH2>Acceptable use</LegalH2>
      <p>
        Please use the service for personal reading and study. Do not scrape,
        resell, or redistribute the content, attempt to break the access
        controls, or use the service to violate the law or the rights of others.
      </p>

      <LegalH2>Content and intellectual property</LegalH2>
      <p>
        The scripture text is the Berean Standard Bible, which is in the public
        domain. The original commentary, design, and software of{" "}
        {COMPANY.product} are owned by {COMPANY.name} and are licensed to you
        for personal use, not sold. Anything you write, such as journal entries,
        notes, and highlights, remains yours; you grant us permission to store
        and display it back to you as part of running the service.
      </p>

      <LegalH2>The AI companion</LegalH2>
      <p>
        The companion drafts commentary with the help of a third party AI model.
        Its output is a reading aid, generated and not authored, and it can be
        incomplete or mistaken. It is not professional, medical, legal, or
        spiritual advice. Use your own judgment.
      </p>

      <LegalH2>Disclaimers and liability</LegalH2>
      <p>
        The service is provided as is, without warranties of any kind. To the
        fullest extent permitted by law, {COMPANY.name} is not liable for
        indirect or consequential damages, and our total liability for any claim
        relating to the service is limited to the amount you paid us in the
        twelve months before the claim.
      </p>

      <LegalH2>Changes</LegalH2>
      <p>
        We may update these terms as the service evolves. If we make a material
        change, we will update the date above and, where appropriate, notify
        you. Continued use after a change means you accept the updated terms.
      </p>

      <LegalH2>Governing law</LegalH2>
      <p>
        These terms are governed by the laws of {COMPANY.governingLaw}, without
        regard to conflict of law rules.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        Questions about these terms can be sent to{" "}
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
