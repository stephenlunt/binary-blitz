import React, { FC } from 'react';

import FlexBox from '../styled/FlexBox';

interface Props {
  binaryValues: number[];
  setBinaryValues: React.Dispatch<React.SetStateAction<number[]>>;
  guess: number;
  setGuess: React.Dispatch<React.SetStateAction<number>>;
}

const FormInputs: FC<Props> = ({
  binaryValues,
  setBinaryValues,
  guess,
  setGuess
}) => {
  function handleChange(newValue: string, index: number) {
    let newValues = [...binaryValues];
    newValues[index] = parseInt(newValue);
    setBinaryValues(newValues);
  }

  return (
    <FlexBox>
      <form>
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
        <button>Check</button>
      </form>
    </FlexBox>
  );
};

export default FormInputs;
