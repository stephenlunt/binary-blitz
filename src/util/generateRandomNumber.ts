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

function generateRandomNumber(level: number): number {
  let maxNumber: number = setMaxFromLevel(level);
  return Math.floor(Math.random() * maxNumber);
}

export default generateRandomNumber;
