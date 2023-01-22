import React, { FC } from 'react';

import { State } from '../hooks/reducer';

interface Props {
  state: State,
}

const Level: FC<Props> = ({state}) => {
  return (
    <div>
      <p>Current level: {state.level}</p>
    </div>
  );
};

export default Level;
