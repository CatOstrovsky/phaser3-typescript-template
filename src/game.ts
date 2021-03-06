/**
 * @author       CatOstrovsky <ska_live@mail.ru>
 * @copyright    2018 web-panda
 * @description  Setup game
 * @license      CatOstrovsky
 */

// Add basic phaser namespaces
/// <reference path="../typescript/phaser.d.ts"/>

import "phaser";
import { Boot } from './scenes/Boot'
import { Welcome } from './scenes/Welcome'
import Config from './const/config'

const config: GameConfig = {
  ...Config,
  scene: [Boot, Welcome]
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new Game(config);
};
