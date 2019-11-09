const quotes = [
  "I'll be back",
  'If it bleeds, we can kill it',
  'Hasta la vista, baby',
  'I need your clothes, your boots, and your motorcycle',
  'Yeah, but they were all bad',
  'It’s not a tumor!',
  'You’re one ugly motherfucker.',
  'Get to the choppa!',
  "You're fired",
  'Now get your ass to Mars',
];

/**
 * Returns a random quote from Arnold Schwarzenegger.
 */
const getRandomQuote = () => quotes[Math.trunc(Math.random() * quotes.length)];

export default getRandomQuote;
