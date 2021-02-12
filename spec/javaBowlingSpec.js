'use strict';

describe('BowlingGame', function() {
  let game;
  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should create a frame hash when two balls rolled', function() {
    game.roll(4, 3)
    expect(game._frames.length).toEqual(1);
  });

  it('should give frame 1 a score of 7', function() {
    game.roll(4, 3)
    expect(game.framescore(1-1)).toEqual(7);
  });
  
  it('should give the a total score of 7 after one frame', function() {
    game.roll(4, 3)
    expect(game.totalscore()).toEqual(7);
  });

  it('should return a total score of 100 after 10 frames', function() {
    for (let i = 0; i < 10; i++) {
      game.roll(10,0)
    }
    expect(game.totalscore()).toEqual(100);
  });

});