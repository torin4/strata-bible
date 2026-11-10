import { LegalH2, LegalLayout } from "@/components/legal/LegalLayout";
import { COMPANY } from "@/lib/company";
import { PLUS_PRICE, TIER_PRICE } from "@/lib/pricing";

export const metadata = {
  title: "特定商取引法に基づく表記, STRATA",
  alternates: { canonical: "/legal-notice" },
};

// Seller disclosure required by Japan's Act on Specified Commercial Transactions for
// online sales. Japanese is the official text; English follows for readers abroad.
// An individual may give the address and phone number on request, as stated below.
const ROWS: { ja: string; en: string; jaValue: string; enValue: string }[] = [
  {
    ja: "販売業者",
    en: "Seller",
    jaValue: `${COMPANY.operator}（屋号：SP Digital Labs）`,
    enValue: `${COMPANY.operator}, trading as SP Digital Labs`,
  },
  {
    ja: "運営責任者",
    en: "Person responsible",
    jaValue: COMPANY.operator,
    enValue: COMPANY.operator,
  },
  {
    ja: "所在地",
    en: "Address",
    jaValue: "請求があった場合には、遅滞なく開示いたします。",
    enValue: "Provided without delay on request.",
  },
  {
    ja: "電話番号",
    en: "Phone",
    jaValue:
      "請求があった場合には、遅滞なく開示いたします。お問い合わせはメールでお願いいたします。",
    enValue: "Provided without delay on request. Please contact us by email.",
  },
  {
    ja: "メールアドレス",
    en: "Email",
    jaValue: COMPANY.contactEmail,
    enValue: COMPANY.contactEmail,
  },
  {
    ja: "販売価格",
    en: "Price",
    jaValue: `STRATA Plus：月額 US${PLUS_PRICE.monthly}／年額 US${PLUS_PRICE.annual}。書籍の買い切り：US${TIER_PRICE.short}〜US${TIER_PRICE.major}（書籍ごとに購入画面に表示）。`,
    enValue: `STRATA Plus: US${PLUS_PRICE.monthly} a month or US${PLUS_PRICE.annual} a year. Single books: US${TIER_PRICE.short} to US${TIER_PRICE.major}, shown for each book before you buy.`,
  },
  {
    ja: "商品代金以外の必要料金",
    en: "Other charges",
    jaValue:
      "インターネット接続にかかる通信料金はお客様のご負担となります。日本円以外の通貨でお支払いの場合、カード会社所定の為替レート・手数料が適用されることがあります。",
    enValue:
      "Internet connection charges are yours. If your card is in another currency, your card issuer's exchange rate and fees may apply.",
  },
  {
    ja: "支払方法",
    en: "Payment method",
    jaValue: "クレジットカード・デビットカード（決済代行：Stripe）",
    enValue: "Credit or debit card, processed by Stripe",
  },
  {
    ja: "支払時期",
    en: "When you pay",
    jaValue:
      "STRATA Plus：お申し込み時に初回のお支払いが発生し、以降は各契約期間の開始時に自動で請求されます。書籍：ご購入時にお支払いいただきます。",
    enValue:
      "STRATA Plus: charged when you subscribe, then automatically at the start of each billing period. Books: charged when you buy.",
  },
  {
    ja: "提供時期",
    en: "When you get access",
    jaValue: "お支払いの完了後、直ちにご利用いただけます。",
    enValue: "Immediately after payment.",
  },
  {
    ja: "自動更新・解約",
    en: "Renewal and cancellation",
    jaValue:
      "STRATA Plus は解約されるまで自動で更新されます。設定画面からいつでも解約でき、解約後も支払済みの期間の終了まではご利用いただけます。",
    enValue:
      "STRATA Plus renews automatically until you cancel. Cancel any time in Settings; you keep access until the end of the period you've paid for.",
  },
  {
    ja: "返金",
    en: "Refunds",
    jaValue:
      "ご請求から14日以内にご連絡いただいた場合、その請求分を全額返金いたします。詳しくは返金ポリシーをご覧ください。返金はStripeを通じて、お支払いに使用されたカードへ行います。",
    enValue:
      "Email us within 14 days of a charge for a full refund of that charge. See the Refund Policy for details. Refunds go back to your card through Stripe.",
  },
  {
    ja: "動作環境",
    en: "Requirements",
    jaValue:
      "最新版のChrome、Safari、Edge、Firefoxなど、主要なウェブブラウザ。インターネット接続が必要です。",
    enValue:
      "A current version of a major web browser, such as Chrome, Safari, Edge or Firefox, and an internet connection.",
  },
];

function Table({ lang }: { lang: "ja" | "en" }) {
  return (
    <div className="overflow-x-auto" lang={lang}>
      <table className="w-full border-collapse text-[14px]">
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.ja} className="border-b border-line align-top">
              <th
                scope="row"
                className="w-[34%] py-3 pr-4 text-left font-medium text-parchment"
              >
                {lang === "ja" ? r.ja : r.en}
              </th>
              <td className="py-3 text-parchment-2">
                {lang === "ja" ? r.jaValue : r.enValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalNoticePage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記" updated="2026年11月6日">
      <p lang="ja">
        {COMPANY.product} Plus
        および書籍の販売に関する、特定商取引法に基づく表記です。
      </p>
      <Table lang="ja" />
      <LegalH2>Legal notice (English)</LegalH2>
      <p lang="en">
        The seller details for {COMPANY.product} Plus and single books required
        by Japan's Act on Specified Commercial Transactions. The Japanese
        version above is the official one.
      </p>
      <Table lang="en" />
    </LegalLayout>
  );
}
