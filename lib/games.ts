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
    publicName: "Exactly One",
    status: "development",
    premise: "A tactile logic puzzle. One pebble in every row. One in every column. One in every territory. No two may touch.",
    shortDescription: "Exactly One is a tactile logic puzzle. One pebble. Every territory.",
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
