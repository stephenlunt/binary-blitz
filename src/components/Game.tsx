import React, { FC, useState } from 'react';

import Level from './Level';
import GameForm from './GameForm';

const Game: FC = () => {
  const [level, setLevel] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [guess, setGuess] = useState(0);
  const [queue, setQueue] = useState([2, 4, 8, 16, 32]);

  return (
    <div>
      <Level level={level} />
      <GameForm guess={guess} setGuess={setGuess} />
    </div>
  );
};

export default Game;
