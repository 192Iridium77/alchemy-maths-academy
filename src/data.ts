import { Player } from "./types";

/**
 * This is a temporary store of data for prototype, will need to move to persistence/api
 */

export const players: Player[] = [
  {
    id: "hero",
    profile: {
      firstName: "Hero",
      lastName: "Ine",
    },
    level: 1,
    stats: {
      speed: 0,
      accuracy: 0,
    },
  },
];
