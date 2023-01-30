import { FC } from 'react';

import { State } from '../hooks/reducer';
import { LevelBox } from '../styled/Box';

interface Props {
  state: State;
}

/**
 * Displays the current game level from the state.
 */
const Level: FC<Props> = ({ state }) => {
  return <LevelBox>Level {state.level}</LevelBox>;
};

export default Level;
