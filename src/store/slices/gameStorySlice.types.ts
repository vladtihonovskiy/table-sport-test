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
  gustPoints: number;
  isPlayed: boolean;
}

export interface GameStoryState {
  listOPlayers: playersObjectTypes[];
  listOfGames: GameObjectType[];
}
