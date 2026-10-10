export type GameStatus = "development" | "testflight" | "review" | "available";

export type GameCard = { tag: string; title: string; body: string };

export type GameRecord = {
  slug: string;
  publicName: string | null;
  status: GameStatus;
  premise: string;
  shortDescription: string;
  appStoreUrl: string | null;
  supportPath: string;
  privacyPath: string;
  preview: "pebbles" | "bottles";
  rulesHeading: string;
  rules: GameCard[];
  supportCards: GameCard[];
  problemReportFields: string[];
  /** Game-specific data the app keeps on the device. */
  storedData: string;
  usesGameCenter: boolean;
  privacyEffective: string;
};

export const games: GameRecord[] = [
  {
    slug: "exactly-one",
    publicName: "Exactly One",
    status: "available",
    premise: "A tactile logic puzzle. One pebble in every row. One in every column. One in every territory. No two may touch.",
    shortDescription: "Play Exactly One free on iPhone and iPad. Solve 100 uniquely solvable logic puzzles, take on a new daily challenge, and climb the Game Center leaderboard.",
    appStoreUrl: "https://apps.apple.com/us/app/exactly-one-logic-puzzle/id6818081491",
    supportPath: "/support/exactly-one",
    privacyPath: "/privacy/exactly-one",
    preview: "pebbles",
    rulesHeading: "Quiet rules. Tactile decisions.",
    rules: [
      { tag: "Place", title: "One pebble per territory", body: "Every colored territory needs exactly one placement." },
      { tag: "Separate", title: "Rows and columns stay unique", body: "No two pebbles can share the same row or column." },
      { tag: "Space", title: "No touching", body: "Neighboring pebbles need breathing room, including diagonally." },
    ],
    supportCards: [
      {
        tag: "Stuck",
        title: "A puzzle feels impossible",
        body: "Every puzzle has exactly one solution. Tap Hint for the next step, or Reset to start the board again. Pre-placed pebbles are part of the puzzle and can\u2019t be moved.",
      },
      {
        tag: "Offline",
        title: "No connection?",
        body: "The whole game works offline, including the daily puzzle. Only the optional Game Center leaderboard and achievements need a connection.",
      },
      {
        tag: "Settings",
        title: "Sound, haptics and progress",
        body: "Open Settings in the game to turn sound or haptics off, or to reset your progress. Resetting cannot be undone and does not remove Game Center achievements.",
      },
    ],
    problemReportFields: ["Puzzle number (if any):"],
    storedData: "your puzzle progress, your current puzzle, your daily streak, whether you have finished the introduction, and your sound and haptics settings",
    usesGameCenter: true,
    privacyEffective: "30 September 2026",
  },
  {
    slug: "top-off",
    publicName: "Top Off",
    status: "development",
    premise: "A calm, tactile pouring puzzle. Pour matching colours until every bottle is full of one colour, or empty.",
    shortDescription: "Top Off is a calm, tactile pouring puzzle. Pour, sort, and top off.",
    appStoreUrl: null,
    supportPath: "/support/top-off",
    privacyPath: "/privacy/top-off",
    preview: "bottles",
    rulesHeading: "Calm pours. No pressure.",
    rules: [
      { tag: "Pour", title: "Tap a bottle, tap another", body: "Pour a colour onto the same colour, or into an empty bottle." },
      { tag: "Sort", title: "One colour per bottle", body: "Finish when every bottle is full of a single colour, or empty." },
      { tag: "Relax", title: "No timers", body: "Undo and restart are always free. Take as long as you like." },
    ],
    supportCards: [
      {
        tag: "Stuck",
        title: "A board feels impossible",
        body: "Undo your last pours or restart the board, both always free. Hints and an extra bottle are there when you need them, and the game tells you if a board can no longer be finished.",
      },
      {
        tag: "Offline",
        title: "No connection?",
        body: "The whole game works offline, including the Daily Puzzle and Endless mode.",
      },
      {
        tag: "Settings",
        title: "Sound, haptics and accessibility",
        body: "Sound and haptics each have their own switch in the game. Top Off supports VoiceOver and Reduce Motion, and every colour has its own shape.",
      },
    ],
    problemReportFields: ["Level or mode (Campaign, Daily, Endless):"],
    storedData: "your level progress and stars, your daily streak, and your sound and haptics settings",
    usesGameCenter: false,
    privacyEffective: "9 October 2026",
  },
];

export function getGame(slug: string): GameRecord | undefined {
  return games.find((game) => game.slug === slug);
}

export function displayName(game: GameRecord): string {
  return game.publicName ?? "Game #001";
}

const statusLabels: Record<GameStatus, string> = {
  development: "In development",
  testflight: "TestFlight",
  review: "In App Review",
  available: "Available",
};

export function statusLabel(status: GameStatus): string {
  return statusLabels[status];
}
