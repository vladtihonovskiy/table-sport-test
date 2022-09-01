import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  GameObjectType,
  GameStoryState,
  playersObjectTypes,
  SaveGameScorePayload,
} from "./gameStorySlice.types";

const newPlayerObjectCreator = (name: string) => ({
  name,
  played: 0,
  win: 0,
  draw: 0,
  lost: 0,
  totalPoints: 0,
});

const newGameObjectCreator = (parentName: string, guestName: string) => ({
  id: `${parentName} ${guestName}`,
  parentName,
  guestName,
  guestPoints: 0,
  parentPoints: 0,
  isPlayed: false,
});

const createNewGames = (
  listOfPlayers: playersObjectTypes[],
  newCommandName: string
) => {
  const newGames: GameObjectType[] = [];
  listOfPlayers.forEach((item) => {
    newGames.push(newGameObjectCreator(item.name, newCommandName));
  });
  return newGames;
};

const initialState: GameStoryState = {
  listOPlayers: [],
  listOfGames: [],
};

export const gameStorySlice = createSlice({
  name: "gameStory",
  initialState,
  reducers: {
    addNewPlayerName: (state, action: PayloadAction<string>) => {
      if (state.listOPlayers.length >= 1) {
        const newListOfGames = createNewGames(
          [...state.listOPlayers],
          action.payload
        );
        state.listOfGames.push(...newListOfGames);
      }
      state.listOPlayers.push(newPlayerObjectCreator(action.payload));
    },
    saveGameResult: (state, action: PayloadAction<SaveGameScorePayload>) => {
      const { id, parentPoints, guestPoints, parentName, guestName } =
        action.payload;
      const updateGameIndex = state.listOfGames.findIndex(
        (item) => item.id === id
      );
      state.listOfGames[updateGameIndex] = {
        ...state.listOfGames[updateGameIndex],
        parentPoints,
        guestPoints,
        isPlayed: true,
      };

      // const parentPlayerIndex = state.listOPlayers.findIndex(
      //   (item) => item.name === parentName
      // );
      // const guestPlayerIndex = state.listOPlayers.findIndex(
      //   (item) => item.name === guestName
      // );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewPlayerName, saveGameResult } = gameStorySlice.actions;

export default gameStorySlice.reducer;
