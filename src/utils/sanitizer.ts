export function sanitizer(input: string): string {
  if (/^\s*javascript:/i.test(input) || /^\s*data:/i.test(input)) {
    return "";
  }

  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
