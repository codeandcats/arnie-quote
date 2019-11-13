export const movies = [
  'Kindergarden Cop',
  'Predator',
  'Terminator',
  'Terminator 2',
  'T3: Rise of the Machines',
  'Total Recall',
  'True Lies',
] as const;

export type Movie = typeof movies[number];

export interface Quote {
  value: string;
  movie: Movie;
}

const quotes: Quote[] = [
  { value: "I'll be back", movie: 'Terminator' },
  { value: 'If it bleeds, we can kill it', movie: 'Predator' },
  { value: 'Hasta la vista, baby', movie: 'Terminator 2' },
  { value: "She'll be back", movie: 'T3: Rise of the Machines' },
  { value: 'I need your clothes, your boots, and your motorcycle', movie: 'Terminator 2' },
  { value: 'Yeah, but they were all bad', movie: 'True Lies' },
  { value: "It's not a tumor!", movie: 'Kindergarden Cop' },
  { value: 'You’re one ugly motherfucker.', movie: 'Predator' },
  { value: 'Get to the choppa!', movie: 'Predator' },
  { value: "You're fired", movie: 'True Lies' },
  { value: 'Now get your ass to Mars', movie: 'Total Recall' },
];

export interface RandomQuoteOptions {
  /**
   * Limit quotes to these movies. If no movies specified will include all movies.
   */
  movies?: Movie[];
}

/**
 * Returns a random quote from Arnold Schwarzenegger.
 */
const getRandomQuote = (options: RandomQuoteOptions = {}) => {
  const movies = (options && options.movies) || [];
  const shortList = quotes.filter(quote => !movies.length || movies.includes(quote.movie));
  return shortList[Math.trunc(Math.random() * shortList.length)].value;
};

export default getRandomQuote;
