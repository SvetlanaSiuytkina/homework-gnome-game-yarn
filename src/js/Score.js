export class Score {
  constructor(maxMisses = 5) {
    this.score = 0;
    this.misses = 0;
    this.maxMisses = maxMisses;
    this.gameOver = false;

    this.scoreEl = document.getElementById('score');
    this.missesEl = document.getElementById('misses');

    this.updateUI();
  }

  addPoint() {
    if (this.gameOver) return;
    this.score++;
    this.updateUI();
  }

  addMiss() {
    if (this.gameOver) return;
    this.misses++;
    this.updateUI();

    if (this.misses >= this.maxMisses) {
      this.gameOver = true;
      alert('Game Over! Your score: ' + this.score);
    }
  }

  updateUI() {
    if (this.scoreEl) {
      this.scoreEl.textContent = this.score;
    }
    if (this.missesEl) {
      this.missesEl.textContent = this.misses;
    }
  }
}
