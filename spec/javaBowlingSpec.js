'use strict';

describe('BowlingGame', function() {
  let game;
  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should give frame 1 a score of 7', function() {
    game.roll(4)
    game.roll(3)
    expect(game._score).toEqual(7);
  });

  it('should give frame 2 a score of ')

});