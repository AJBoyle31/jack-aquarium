export class Aquarium extends Phaser.Scene {
  preload() {
    
    this.load.image('tiles', 'assets/fishTilesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/jacksAquarium.json');
    
    this.load.atlas('fish', 'assets/fishSpritesheet.png', 'assets/fishSpritesheet.json');
    
  }

  create() {
    
    const map = this.make.tilemap({key: "map"});
    
    const tileset = map.addTilesetImage("aquarium", "tiles");
    
    const waterBackground = map.createStaticLayer("waterBackground", tileset, 0, 0);
    const sandyBottom = map.createStaticLayer("sandyBottom", tileset, 0, 0);
    const plantsAndRocks = map.createStaticLayer("plantsAndRocks", tileset, 0, 0);
    
    this.fish = this.add.sprite(400, 300, 'fish', 'fishy');
    
  }
  update() {
    
  }
}