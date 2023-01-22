function convertBinaryValues(binary: number[]): number {
  const N: number = 9;
  let decimalValue: number = 0;

  binary.forEach((value, index) => {
    if (value === 1) {
      let exponential: number = N - index;
      decimalValue += 2 ** exponential;
    }
  });

  return decimalValue;
}

export default convertBinaryValues;
