/**
 * Win and loss messages to be displayed randomly to user.
 */
const PLAYER_MESSAGES = {
  WIN: [
    'Well done!',
    'Pat on the back',
    'You are amazing!',
    'Keep it up!',
    'Bow Chicka Wow Wow',
    'Mission accomplished',
    'Very nice',
    'A*',
    'You passed',
    '🎉',
    `You're on a roll`,
    'Get in baby',
    `There's no stopping you`
  ],
  LOSS: [
    'Go back to school',
    'Tough luck',
    'Sad times',
    'Maybe next time',
    'Unfortunate',
    'Embarrassing',
    `That's just sad`,
    'Houston, we have a problem',
    `'Bit' off there 😉`,
    'FAIL!',
    'Did you click the wrong button?',
    'This game is as easy as 01, 10, 11.',
    'I think you need to learn to play this game, bit by bit.'
  ]
};

/**
 * Picks a random player win message from PLAYER_MESSAGES constant.
 * @returns {string} The win player message.
 */
export function newWinPlayerMessage(): string {
  return PLAYER_MESSAGES.WIN[
    Math.floor(Math.random() * PLAYER_MESSAGES.WIN.length)
  ];
}

/**
 * Picks a random player loss message from PLAYER_MESSAGES constant.
 * @returns {string} The loss player message.
 */
export function newLossPlayerMessage(): string {
  return PLAYER_MESSAGES.LOSS[
    Math.floor(Math.random() * PLAYER_MESSAGES.LOSS.length)
  ];
}
