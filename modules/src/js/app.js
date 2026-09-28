import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();

console.log(GameSavingData, loadGame, saveGame);
console.log('app worked');
