import { Reducer } from 'react';

import generateRandomNumber from '../util/generateRandomNumber';

export interface State {
  level: number;
  currentNumber: number | undefined;
  nextNumber: number;
}

export interface Action {
  type: string;
}

export const INITIAL_STATE: State = {
  level: 0,
  currentNumber: 1,
  nextNumber: 4
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

      const newState: State = {
        level: level,
        currentNumber: currentNumber,
        nextNumber: newRandInt
      };

      return newState;
    case ACTION_TYPES.LOSS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
