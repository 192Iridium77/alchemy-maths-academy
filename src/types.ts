export interface Stats {
  speed: number;
  accuracy: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
}

export interface Player {
  id: string;
  profile: Profile;
  level: number;
  stats: Stats;
  sessionId?: string;
}

export enum GameType {
  MULTIPLICATION = "multiplication",
}

// must store dynamic values
// question could have many different kinds of data
export interface MultiplicationQuestion {
  id: string;
  value1: number;
  value2: number;
}

// game's job is to manage players
export interface Game {
  id: string; // uuid
  type: GameType;
  playerLimit: number;
}

// quiz's job is to manage questions
export interface MultiplicationQuiz {
  id: string; // uuid
  playerId: string;
  questions: MultiplicationQuestion[];
}

/**
 * could a session be a collection of all players in a game?
 * Game could contain a collection of sessionIds?
 * if each player has a session, 1 player could be in many games
 * this is overcomplicated
 * one player should only have one game
 */
export interface Session {
  id: string; // uuid
  playerId: string;
  gameId: string;
}
