import { Game } from './js/Game.js';
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.start();
});