import getRandomQuote from '.';

describe('getRandomQuote', () => {
  it('should return a random quote', () => {
    expect(getRandomQuote()).toBeTruthy();

    jest.spyOn(Math, 'random').mockReturnValue(0.111);
    expect(getRandomQuote).toBeTruthy();

    jest.spyOn(Math, 'random').mockReturnValue(0.9999);
    expect(getRandomQuote).toBeTruthy();
  });

  it('should return a random quote from specific movies', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.111);
    expect(
      getRandomQuote({
        movies: ['Kindergarden Cop', 'Total Recall'],
      }),
    ).toEqual("It's not a tumor!");

    jest.spyOn(Math, 'random').mockReturnValue(0.999);
    expect(
      getRandomQuote({
        movies: ['Kindergarden Cop', 'Total Recall'],
      }),
    ).toEqual('Consider that a divorce');

    jest.spyOn(Math, 'random').mockReturnValue(0.111);
    expect(
      getRandomQuote({
        movies: ['Kindergarden Cop'],
      }),
    ).toEqual("It's not a tumor!");

    jest.spyOn(Math, 'random').mockReturnValue(0.999);
    expect(
      getRandomQuote({
        movies: ['Kindergarden Cop'],
      }),
    ).toEqual("It's not a tumor!");
  });
});
