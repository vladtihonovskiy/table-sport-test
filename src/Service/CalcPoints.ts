import { playersObjectTypes } from "../store/slices/gameStorySlice.types";

const PLAY_SCORE_OBJECT = {
  isDraw: 1,
  isLost: 0,
  isWin: 3,
};

class GamePoints {
  private playerObject: playersObjectTypes;

  private currentPlayerScore: number;

  private opponentPlayerScore: number;

  private getGameStatusObject: {
    isLost: boolean;
    isDraw: boolean;
    isWin: boolean;
  };

  constructor(
    playerObject: playersObjectTypes,
    currentPlayerScore: number,
    opponentPlayerScore: number
  ) {
    this.playerObject = {...playerObject};
    this.currentPlayerScore = currentPlayerScore;
    this.opponentPlayerScore = opponentPlayerScore;

    this.getGameStatusObject = {
      isDraw: currentPlayerScore === opponentPlayerScore,
      isLost: currentPlayerScore < opponentPlayerScore,
      isWin: currentPlayerScore > opponentPlayerScore,
    };
  }

  getGameStatusObjectMethod() {
    return this.getGameStatusObject;
  }

  calcPoints() {
    const { isDraw, isLost, isWin } = this.getGameStatusObjectMethod();
    if (isDraw) {
      return PLAY_SCORE_OBJECT.isDraw;
    }
    if (isLost) {
      return PLAY_SCORE_OBJECT.isLost;
    }
    if (isWin) {
      return PLAY_SCORE_OBJECT.isWin;
    }
    return 0;
  }

  getNewPlayerObject() {
    const {
      played: oldPlayedCount,
      win: oldWinCount,
      draw: oldDrawCount,
      lost: oldLostCount,
      totalPoints: oldTotalPointsCount,
      name,
    } = this.playerObject;

    const { isDraw, isLost, isWin } = this.getGameStatusObjectMethod();

    return {
      name,
      played: oldPlayedCount + 1,
      draw: isDraw ? oldDrawCount + 1 : oldDrawCount,
      lost: isLost ? oldLostCount + 1 : oldLostCount,
      win: isWin ? oldWinCount + 1 : oldWinCount,
      totalPoints: oldTotalPointsCount + this.calcPoints();
    };
  }
}

export default GamePoints;
