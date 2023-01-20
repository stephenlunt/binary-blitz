import React, { FC } from 'react';

interface Props {
  level: number;
}

const Level: FC<Props> = ({ level }) => {
  return (
    <div>
      <p>Current level: {level}</p>
    </div>
  );
};

export default Level;
