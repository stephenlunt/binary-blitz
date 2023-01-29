import React, { FC, useEffect, useState } from 'react';

import { State, Action, ACTION_TYPES } from '../hooks/reducer';
import convertBinaryValues from '../util/convertBinaryValues';
import { PrimaryButton } from '../styled/Buttons';
import { Form, InputButton } from '../styled/Forms';
import { MessageBox } from '../styled/Box';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const INITIAL_BINARY_VALUES: number[] = new Array(10).fill(0);

const FormInputs: FC<Props> = ({ state, dispatch }) => {
  const [binaryValues, setBinaryValues] = useState(INITIAL_BINARY_VALUES);
  const [playerGuess, setPlayerGuess] = useState(0);

  const handleClick = (prevValue: string, index: number) => {
    let newValues = [...binaryValues];
    if (parseInt(prevValue) === 0) {
      newValues[index] = 1;
    } else {
      newValues[index] = 0;
    }
    setBinaryValues(newValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlayerGuess(convertBinaryValues(binaryValues));
    setBinaryValues(INITIAL_BINARY_VALUES);
  };

  useEffect(() => {
    if (playerGuess === state.currentNumber) {
      dispatch({ type: ACTION_TYPES.WIN });
    } else {
      dispatch({ type: ACTION_TYPES.LOSS });
    }
  }, [playerGuess]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          {binaryValues.map((value, index) => {
            return (
              <InputButton
                key={index}
                type="button"
                value={value}
                onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleClick(e.target.value, index)
                }
              />
            );
          })}
        </div>
        <MessageBox className={state.prevState}>
          {state.playerMessage}
        </MessageBox>
        <PrimaryButton type="submit">Check</PrimaryButton>
      </Form>
    </>
  );
};

export default FormInputs;
