export type GameStatus = "development" | "testflight" | "available";

export type GameRecord = {
  internalCodename: string;
  slug: string;
  publicName: string | null;
  status: GameStatus;
  premise: string;
  shortDescription: string;
  appStoreUrl: string | null;
  supportPath: string;
  privacyPath: string;
};

export const games: GameRecord[] = [
  {
    internalCodename: "Nine",
    slug: "nine",
    publicName: null,
    status: "development",
    premise: "Place one tactile pebble in every territory without sharing a row, column, region, or touching a neighbor.",
    shortDescription: "A calm, tactile constraint puzzle built around colorful territories and satisfying placement.",
    appStoreUrl: null,
    supportPath: "/support/nine",
    privacyPath: "/privacy/nine",
  },
];

export function getGame(slug: string): GameRecord | undefined {
  return games.find((game) => game.slug === slug);
}

export function displayName(game: GameRecord): string {
  return game.publicName ?? "Game #001";
}
