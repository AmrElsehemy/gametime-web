// Existing public Knowlly contact: https://www.knowlly.ai/contact
export const supportEmail = "sales@knowlly.ai";
export const supportMailto = `mailto:${supportEmail}?subject=Exactly%20One%20Support`;

export function supportMailtoFor(gameName: string): string {
  return `mailto:${supportEmail}?subject=${encodeURIComponent(`${gameName} Support`)}`;
}
