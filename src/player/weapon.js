let targets = [];
function LockTarget(x, y) {
  this.hud1 = new PIXI(
    PIXI.loader.resources['lockon'].texture
  );
  this.hud2 = new PIXI(
    PIXI.loader.resources['lockon'].texture
  );
  this.x = x,
  this.y = y,
  this.hudsize = 3,
  this.draw() {
    this.hud1.x = this.x;
    this.hud2.y = this.y;
    this.hud1.rotation += .4;
    this.hud2.rotation -= .2;
    this.hud1.scale.set(this.hudsize,this.hudsize);
    this.hud2.scale.set(this.hudsize*.7,this.hudsize*.7);
  },
  this.update(deltaT) {
    if (this.hudsize > .4) {
      this.hudsize -= .2;
    }
    this.draw();
  }
}
