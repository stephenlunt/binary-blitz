import React, { FC, useState } from 'react';

import FormInputs from './FormInputs';
import FormHelper from './FormHelper';

import convertBinaryValues from '../util/convertBinaryValues';

import FlexBox from '../styled/FlexBox';

interface Props {
  guess: number;
  setGuess: React.Dispatch<React.SetStateAction<number>>;
}

const GameForm: FC<Props> = ({ guess, setGuess }) => {
  const [binaryValues, setBinaryValues] = useState(new Array(10).fill(0));

  return (
    <div>
      <h2>Enter your guess below!</h2>

      <FormHelper />
      <FormInputs
        binaryValues={binaryValues}
        setBinaryValues={setBinaryValues}
        guess={guess}
        setGuess={setGuess}
      />
    </div>
  );
};

export default GameForm;
