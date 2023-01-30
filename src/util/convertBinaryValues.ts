/**
 * Converts an array of 0's and 1's (binary) to a deciaml number.
 * @param binary An array of 0's and 1's representing the players binary guess.
 * @returns {number} The decimal conversion of the binary array.
 */
export default function convertBinaryValues(binary: number[]): number {
  const N: number = 9; // Max number of places.
  let decimalValue: number = 0;

  binary.forEach((value, index) => {
    if (value === 1) {
      let exponential: number = N - index;
      decimalValue += 2 ** exponential;
    }
  });

  return decimalValue;
}
