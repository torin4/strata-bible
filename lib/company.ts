// The business identity behind STRATA, used by the legal pages, the footer, and pricing.
// One place to change the company name, support address, or policy date.
export const COMPANY = {
  name: "SP DIGITAL LABS",
  // SP Digital Labs is a trading name, not a company. Legal text names the person.
  operator: "Joseph Suzuki Parker",
  operatorLine:
    "SP Digital Labs, the name under which Joseph Suzuki Parker, an independent developer based in Japan, publishes apps",
  product: "STRATA",
  // A reachable support address. Swap for a branded one (e.g. support@yourdomain) once a
  // custom domain is set up.
  contactEmail: "torin2582@gmail.com",
  url: "https://stratabible.app",
  // Bump when the policies are revised.
  policiesUpdated: "June 9, 2026",
  // Jurisdiction for the terms. Confirm against your own legal advice.
  governingLaw: "Japan",
} as const;
