'use strict';

class BowlingGame {

  constructor() {
    this._score = 0
  }

roll(pinsdown) {
  this._score += pinsdown
}

score() {
  return this._score;
}

}

