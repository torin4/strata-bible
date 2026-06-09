import { LegalH2, LegalLayout } from "@/components/legal/LegalLayout";
import { COMPANY } from "@/lib/company";

export const metadata = {
  title: "Refund Policy, STRATA",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" updated={COMPANY.policiesUpdated}>
      <p>
        We want {COMPANY.product} to be worth it. This policy explains how
        cancellation and refunds work for {COMPANY.product} Plus.
      </p>

      <LegalH2>Cancelling</LegalH2>
      <p>
        You can cancel your subscription at any time from Settings, under STRATA
        Plus. Cancelling stops all future charges. You keep full access until
        the end of the period you have already paid for, and you are not billed
        again after that.
      </p>

      <LegalH2>Refunds</LegalH2>
      <p>
        If you are not satisfied, email us within 14 days of a charge and we
        will refund that charge in full, no questions asked. After 14 days, a
        renewal charge is generally non refundable, but if something went wrong,
        write to us and we will make it right.
      </p>

      <LegalH2>The free tier</LegalH2>
      <p>
        The primeval history of Genesis is free to read without a subscription,
        so you can try {COMPANY.product} before you pay. There is nothing to
        refund on the free tier.
      </p>

      <LegalH2>How to reach us</LegalH2>
      <p>
        For a refund or any billing question, contact{" "}
        <a
          href={`mailto:${COMPANY.contactEmail}`}
          className="text-gold-bright underline"
        >
          {COMPANY.contactEmail}
        </a>
        . Refunds are returned to your original payment method through Stripe
        and can take a few business days to appear.
      </p>
    </LegalLayout>
  );
}
