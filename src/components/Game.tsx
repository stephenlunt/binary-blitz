import { FC, useReducer } from 'react';

import { gameReducer, INITIAL_STATE } from '../hooks/reducer';
import Level from './Level';
import GameForm from './GameForm';
import { CenteredBox } from '../styled/FlexBox';

/**
 * Render all game related components and intiialise application wide state through reducer.
 */
const Game: FC = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return (
    <CenteredBox>
      <Level state={state} />
      <GameForm state={state} dispatch={dispatch} />
    </CenteredBox>
  );
};

export default Game;
