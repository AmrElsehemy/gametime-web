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
  /** Heading and cards for the "idea" section of the game page. */
  idea: { heading: string; cards: { tag: string; title: string; body: string }[] };
  /** Shows the abstract pebble-grid preview, which belongs to the territory-placement game only. */
  showPebblePreview: boolean;
};

export const games: GameRecord[] = [
  {
    internalCodename: "Nine",
    slug: "exactly-one",
    publicName: "Exactly One",
    status: "development",
    premise: "A tactile logic puzzle. One pebble in every row. One in every column. One in every territory. No two may touch.",
    shortDescription: "Exactly One is a tactile logic puzzle. One pebble. Every territory.",
    appStoreUrl: null,
    supportPath: "/support/exactly-one",
    privacyPath: "/privacy/exactly-one",
    showPebblePreview: true,
    idea: {
      heading: "Quiet rules. Tactile decisions.",
      cards: [
        { tag: "Place", title: "One pebble per territory", body: "Every colored territory needs exactly one placement." },
        { tag: "Separate", title: "Rows and columns stay unique", body: "No two pebbles can share the same row or column." },
        { tag: "Space", title: "No touching", body: "Neighboring pebbles need breathing room, including diagonally." },
      ],
    },
  },
  {
    internalCodename: "FlagQuiz",
    slug: "geographica-flag-trek",
    publicName: "Geographica: Flag Trek",
    status: "development",
    premise: "Trek around the world one flag at a time. Name each flag, keep your fuel up and collect stars on the way to the next stop.",
    shortDescription: "Geographica: Flag Trek is a flag quiz adventure. Name the flag, keep your fuel up, collect the stars.",
    appStoreUrl: null,
    supportPath: "/support/geographica-flag-trek",
    privacyPath: "/privacy/geographica-flag-trek",
    showPebblePreview: false,
    idea: {
      heading: "Easy to start. Sneaky later on.",
      cards: [
        { tag: "Trek", title: "A map of stops", body: "Work through the stops on the world map. Each one is a short round of flags to name." },
        { tag: "Fuel", title: "Three fuel, no free passes", body: "A wrong answer costs fuel. Run dry and you can try the stop again." },
        { tag: "Daily", title: "A daily challenge", body: "Everyone gets the same ten flags each day. Your first attempt counts for the Game Center leaderboard." },
      ],
    },
  },
];

export function getGame(slug: string): GameRecord | undefined {
  return games.find((game) => game.slug === slug);
}

export function displayName(game: GameRecord): string {
  return game.publicName ?? "Game #001";
}
