import { FC } from 'react';

import { State } from '../hooks/reducer';

interface Props {
  state: State;
}

const Queue: FC<Props> = ({ state }) => {
  return (
    <div>
      <h2>Next</h2>
      <p>{state.nextNumber}</p>
    </div>
  );
};

export default Queue;
