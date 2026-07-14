import goblinImg from './images/goblin.png';

export class Goblin {
  constructor() {
    this.element = null;
    this.currentCell = null;
    this.timer = null;
  }

  createGoblin(cell, onGoblinHit) {
    this.remove();

    this.currentCell = cell;
    this.element = document.createElement('img');
    this.element.src = goblinImg;
    this.element.className = 'gnome';
    
    this.element.addEventListener('click', () => {
      this.remove();
      onGoblinHit(true);
    });

    cell.appendChild(this.element);

    this.timer = setTimeout(() => {
      if(this.element) {
        this.remove();
        onGoblinHit(false);
      }
    }, 1000);
  }

  remove() {
    if (this.element) {
      this.element.remove();
      this.element = null;
      this.currentCell = null;
    }

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}