import 'phaser';

import { Aquarium } from './scenes/aquarium';

const gameConfig = {
  width: 1600,
  height: 960,
  scene: Aquarium
};

new Phaser.Game(gameConfig);