import { Reducer } from 'react';

import generateRandomNumber from '../util/generateRandomNumber';
import {
  newWinPlayerMessage,
  newLossPlayerMessage
} from '../util/playerMessages';

/**
 * Define TypeScript interfaces for game wide state
 */
export interface State {
  level: number;
  currentNumber: number;
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

/**
 * Handles any changes to the game state on win and loss outcomes.
 * @param state The current game state.
 * @param action Contains the action type to be carried out.
 * @returns {State} Returns the new game state.
 */
export const gameReducer: Reducer<State, Action> = (state, action): State => {
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
