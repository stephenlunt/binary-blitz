import React, { FC } from 'react';

import { State, Action } from '../hooks/reducer';

import FormInputs from './FormInputs';
import FormHelper from './FormHelper';
import Queue from './NextNumber';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const GameForm: FC<Props> = ({ state, dispatch }) => {
  return (
    <div>
      <h2>Current Number: {state.currentNumber}</h2>
      <p>Enter your guess below!</p>

      <FormHelper />
      <FormInputs state={state} dispatch={dispatch} />
      <Queue state={state} />
    </div>
  );
};

export default GameForm;
