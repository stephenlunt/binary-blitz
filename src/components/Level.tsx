import React, { FC } from 'react';

import { State } from '../hooks/reducer';

import { LevelBox } from '../styled/Box';

interface Props {
  state: State;
}

const Level: FC<Props> = ({ state }) => {
  return <LevelBox>Level {state.level}</LevelBox>;
};

export default Level;
