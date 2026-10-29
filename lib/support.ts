import { supportEmail as siteSupportEmail } from "@/lib/site";

export const supportEmail = siteSupportEmail;

export const supportMailto = `mailto:${supportEmail}?subject=Exactly%20One%20Support`;

export function supportMailtoFor(gameName: string): string {
  return `mailto:${supportEmail}?subject=${encodeURIComponent(`${gameName} Support`)}`;
}
