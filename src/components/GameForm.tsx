import React, { FC } from 'react';

import { State, Action } from '../hooks/reducer';
import FormInputs from './FormInputs';
import FormHelper from './FormHelper';
import { CenteredBox } from '../styled/FlexBox';
import { BorderBox, NumberBox } from '../styled/Box';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

/**
 * Render the current number, helper section and game form component.
 */
const GameForm: FC<Props> = ({ state, dispatch }) => {
  return (
    <div>
      <CenteredBox>
        <BorderBox>
          <span>Current Number</span>
          <NumberBox>{state.currentNumber}</NumberBox>
        </BorderBox>
      </CenteredBox>

      <FormHelper />
      <FormInputs state={state} dispatch={dispatch} />
    </div>
  );
};

export default GameForm;
