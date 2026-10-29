export const supportEmail = "help@knowlly.games";

export function supportMailto(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${supportEmail}?${params.toString().replace(/\+/g, "%20")}`;
}
