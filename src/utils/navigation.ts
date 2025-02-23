export function replaceInUrl(pageUrl: string, replacement: string | number): string {
  return pageUrl.replace(/:([a-zA-Z0-9_]+)/g, String(replacement).toLowerCase());
}
