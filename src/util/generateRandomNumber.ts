/**
 * Sets the maximum decimal number based upon game level.
 * @param level The current game level from React reducer.
 * @returns {number} The maximum possible decimal number.
 */
function setMaxFromLevel(level: number): number {
  switch (true) {
    case level < 10:
      return 32;
    case level < 15:
      return 64;
    case level < 20:
      return 128;
    case level < 30:
      return 256;
    default:
      return 512;
  }
}

/**
 * Generates a random integer based upon the game level passed into the function.
 * @param level The current game level from React reducer.
 * @returns {number} The new decimal number for the player to guess.
 */
export default function generateRandomNumber(level: number): number {
  let maxNumber: number = setMaxFromLevel(level);
  return Math.floor(Math.random() * maxNumber);
}
