'use strict';

class BowlingGame {

  constructor() {
    this._score = 0
  }

  roll(pins) {
    this._score += pins
  }

}