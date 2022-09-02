export interface GameStatusType {
  isDraw: boolean;
  isLost: boolean;
  isWin: boolean;
}

export const getGameStatusObject = (
  currentPlayerScore: number,
  opponentPlayerScore: number
) => ({
  isDraw: currentPlayerScore === opponentPlayerScore,
  isLost: currentPlayerScore < opponentPlayerScore,
  isWin: currentPlayerScore > opponentPlayerScore,
});

export const callPoints = ({}: GameStatusType) => {};
