import Phaser from 'phaser'

import scene from './scene'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  transparent: true,
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [scene],
}

export default new Phaser.Game(config)