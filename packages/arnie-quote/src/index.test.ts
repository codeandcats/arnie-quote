import getRandomQuote from '.';

describe('getRandomQuote', () => {
  it('should return a random quote', () => {
    expect(getRandomQuote()).toBeTruthy();

    jest.spyOn(Math, 'random').mockReturnValue(0.111);
    expect(getRandomQuote).toBeTruthy();

    jest.spyOn(Math, 'random').mockReturnValue(0.9999);
    expect(getRandomQuote).toBeTruthy();
  });
});
