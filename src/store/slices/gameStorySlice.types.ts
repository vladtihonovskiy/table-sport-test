export interface playersObjectTypes {
  name: string;
  played: number;
  win: number;
  draw: number;
  lost: number;
  totalPoints: number;
}

export interface GameObjectType {
  id: string;
  parentName: string;
  guestName: string;
  parentPoints: number;
  guestPoints: number;
  isPlayed: boolean;
}

export interface GameStoryState {
  listOPlayers: playersObjectTypes[];
  listOfGames: GameObjectType[];
}

export interface SaveGameScorePayload {
  id: string;
  parentPoints: number;
  guestPoints: number;
  parentName: string;
  guestName: string;
}
