import { FC, useReducer } from 'react';

import { gameReducer, INITIAL_STATE } from '../hooks/reducer';

import Level from './Level';
import GameForm from './GameForm';

const Game: FC = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return (
    <div>
      <Level state={state} />
      <GameForm state={state} dispatch={dispatch} />
    </div>
  );
};

export default Game;
