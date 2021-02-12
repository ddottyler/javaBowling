'use strict';

class BowlingGame {

  constructor() {
    this._score = 0
    this._frames = []
  }

  roll(roll1, roll2) {
    this._frames.push([roll1, roll2]);
  }

  framescore(frame) {
    let framescore = this._frames[frame][0] + this._frames[frame][1]
    return framescore
  }

  totalscore() {
    this._frames.forEach(frame => this._score += frame[0] += frame[1])
    return this._score
  }

}