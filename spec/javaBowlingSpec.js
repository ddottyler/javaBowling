'use strict';

describe('BowlingGame', function() {
  let game;
  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should roll the ball', function() {
    game.roll(7)
    expect(game.score()).toEqual(7)
  })

  it('should return calculate a gutter game', function() {
    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });

  it('can score a game of ones', function() {
    for (let i = 0; i < 20; i++) {
      game.roll(1)
    }
    expect(game.score()).toEqual(20);
  });

})