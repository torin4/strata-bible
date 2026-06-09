// The business identity behind STRATA, used by the legal pages, the footer, and pricing.
// One place to change the company name, support address, or policy date.
export const COMPANY = {
  name: "SP DIGITAL LABS",
  product: "STRATA",
  // A reachable support address. Swap for a branded one (e.g. support@yourdomain) once a
  // custom domain is set up.
  contactEmail: "torin2582@gmail.com",
  url: "https://strata-bible.vercel.app",
  // Bump when the policies are revised.
  policiesUpdated: "June 9, 2026",
  // Jurisdiction for the terms. Confirm against your own legal advice.
  governingLaw: "Japan",
} as const;
