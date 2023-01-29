import { Reducer } from 'react';

import generateRandomNumber from '../util/generateRandomNumber';
import {
  newWinPlayerMessage,
  newLossPlayerMessage
} from '../util/playerMessages';

export interface State {
  level: number;
  currentNumber: number | undefined;
  nextNumber: number;
  prevState: string;
  playerMessage: string;
}

export interface Action {
  type: string;
}

export const INITIAL_STATE: State = {
  level: 0,
  currentNumber: 1,
  nextNumber: 4,
  prevState: 'loss',
  playerMessage: ''
};

export const ACTION_TYPES = {
  WIN: 'WIN',
  LOSS: 'LOSS'
};

export const gameReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.WIN:
      const level: number = state.level + 1;
      const currentNumber: number = state.nextNumber;
      const newRandInt: number = generateRandomNumber(level);
      const winMessage: string = newWinPlayerMessage();

      const newWinState: State = {
        level: level,
        currentNumber: currentNumber,
        nextNumber: newRandInt,
        prevState: 'win',
        playerMessage: winMessage
      };

      return newWinState;
    case ACTION_TYPES.LOSS:
      if (state.level === 0) {
        return INITIAL_STATE;
      }

      const lossMessage: string = newLossPlayerMessage();

      const newLossState: State = {
        ...INITIAL_STATE,
        playerMessage: lossMessage
      };
      return newLossState;
    default:
      return state;
  }
};
