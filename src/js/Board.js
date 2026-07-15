export class Board {
  constructor(rows = 4, columns = 4) {
    this.rows = rows;
    this.columns = columns;
    this.boardEl = document.querySelector('.game-board');
    this.cells = [];

    this.createCells();
  }

  createCells() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        this.boardEl.appendChild(cell);
        this.cells.push(cell);
      }
    }
  }

  getRandomCell() {
    const index = Math.floor(Math.random() * this.cells.length);
    return this.cells[index];
  }
}