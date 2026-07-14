import { Board } from './Board.js';
import { Goblin } from './Goblin.js';
import { Score } from './Score.js';

export class Game {
  constructor() {
    this.board = new Board(4, 4);
    this.goblin = new Goblin();
    this.score = new Score(5);
  }

  start() {
    this.continueRound();
  }

  continueRound() {
    if (this.score.gameOver) {
      return;
    }

    this.startRound();
  }

  startRound() {
    const cell = this.board.getRandomCell();
    const onGoblinHit =(isHit) => {
      if (isHit) {
        this.score.addPoint();
      } else {
        this.score.addMiss();
      }

      this.continueRound();
    }

    this.goblin.createGoblin(cell, onGoblinHit);
  }
}