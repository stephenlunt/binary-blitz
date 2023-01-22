import React, { FC, useEffect, useState } from 'react';

import { State, Action, ACTION_TYPES } from '../hooks/reducer';

import convertBinaryValues from '../util/convertBinaryValues';

import FlexBox from '../styled/FlexBox';
import { PrimaryButton } from '../styled/Buttons';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const INITIAL_BINARY_VALUES: number[] = new Array(10).fill(0);

const FormInputs: FC<Props> = ({ state, dispatch }) => {
  const [binaryValues, setBinaryValues] = useState(INITIAL_BINARY_VALUES);
  const [playerGuess, setPlayerGuess] = useState(0);

  const handleChange = (newValue: string, index: number) => {
    let newValues = [...binaryValues];
    newValues[index] = parseInt(newValue);
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
    <FlexBox>
      <form onSubmit={handleSubmit}>
        {binaryValues.map((value, index) => {
          return (
            <input
              key={index}
              type="number"
              min={0}
              max={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          );
        })}
        <br />
        <PrimaryButton type="submit">Check</PrimaryButton>
      </form>
    </FlexBox>
  );
};

export default FormInputs;
