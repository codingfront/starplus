export const movieRatedDescriptions: Record<string, string> = {
  G: "G - All ages admitted.Nothing that would offend parents for viewing by children",
  PG: "PG - Some material may not be suitable for children.Parents urged to give parental guidance. May contain some material parents might not like for their young children.",
  "PG-13":
    "Some material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may not be appropriate for pre-teenagers.",
  R: "R - Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.",
  "NC-17": "Adults only, suitable for ages 17 and up",
  "Not Rated": "Not Rated - This movie has not been officially rated",
  Unrated: "Unrated - No official rating assigned",
  Passed:
    "Passed was a classification used by the Hays Office (Motion Picture Production Code Administration), which enforced the Hays Code from the 1930s to the 1960s.",
  Approved:
    "The Approved rating was used before the MPAA introduced the modern rating system in 1968. It did not specify an exact age restriction but was generally understood to mean that the movie was suitable for all audiences, similar to today's G (General Audience) rating.",
};
export const convertRuntimeToHours = (runtime: string): string => {
  const minutes = parseInt(runtime.replace(/\D/g, ""), 10);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
};

export const formatNumberAbbreviation = (numStr: string): string => {
  const num = parseFloat(numStr.replace(/,/g, ""));
  if (isNaN(num)) return "Invalid number";
  const suffixes = [
    { value: 1e9, symbol: "B" }, // Billion
    { value: 1e6, symbol: "M" }, // Million
    { value: 1e3, symbol: "K" }, // Thousand
  ];

  for (const { value, symbol } of suffixes) {
    if (num >= value) {
      return (num / value).toFixed(1).replace(/\.0$/, "") + symbol;
    }
  }
  return num.toString();
};
const currencies = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  JPY: "Japanese Yen",
} as const;

type CurrencyCode = keyof typeof currencies;

export function formatNumber(amount: string, currency?: CurrencyCode): string {
  if (!amount) return "Invalid number format";
  if (amount.includes("$") || amount.includes(",")) return amount;
  if (amount === "N/A") return "not available";
  const cleanedAmount = amount.replace(/[^0-9.,-]/g, "").trim();

  if (!cleanedAmount) return "Invalid number format";

  const decimalSeparator =
    cleanedAmount.includes(",") &&
    cleanedAmount.lastIndexOf(",") > cleanedAmount.lastIndexOf(".")
      ? ","
      : ".";

  const normalizedAmount = cleanedAmount
    .replace(new RegExp(`\\${decimalSeparator === "," ? "\\." : ","}`, "g"), "")
    .replace(decimalSeparator, ".");

  return currency
    ? new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
        Number(normalizedAmount),
      )
    : new Intl.NumberFormat("en-US").format(Number(normalizedAmount));
}
