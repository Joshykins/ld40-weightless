let targets = [];
let shot = [];
let shotCount = 0;


window.addEventListener("mousedown", function(event) {



  targets.push(new LockTarget(mouse.x, mouse.y))
  stage.addChild(targets[targets.length-1].hud1);
  stage.addChild(targets[targets.length-1].hud2);
  stage.addChild(targets[targets.length-1].beam);
  stage.addChild(targets[targets.length-1].explosion);
});



function LockTarget(x, y) {
  this.hud1 = new PIXI.Sprite(
    PIXI.loader.resources['lockon'].texture
  ),
  this.hud2 = new PIXI.Sprite(
    PIXI.loader.resources['lockon'].texture
  ),
  this.beam = new PIXI.Graphics(),
  this.explosion = new PIXI.Graphics();
  this.x = x,
  this.y = y,
  this.beam.opacity = 0,
  this.shot=false,
  this.hudsize = .5,
  this.mod = 0;
  this.explosionradius = 20;
  this.explosionradiusTg = 40;


  this.draw = function() {
    this.hud1.x = this.x-this.mod;
    this.hud2.x = this.x-this.mod;
    this.hud1.y = this.y-this.mod;
    this.hud2.y = this.y-this.mod;
    this.hud1.rotation += 0.04;
    this.hud2.rotation -= 0.02;
    this.hud1.anchor.set(0.5,0.5);
    this.hud2.anchor.set(0.5,0.5);
    this.hud1.scale.set(this.hudsize,this.hudsize);
    this.hud2.scale.set(this.hudsize*0.7,this.hudsize*0.7);

    this.beam.clear();
    this.beam.lineStyle(2, 0x00ff00,this.beam.opacity);
    this.beam.moveTo(appWidth/2,appHeight/2);
    this.beam.lineTo(this.x, this.y);
    this.beam.endFill();
    this.beam.lineStyle(0);

    this.explosion.clear();
    this.explosion.beginFill(0x00ff00,this.beam.opacity)
    this.explosion.drawCircle(this.x, this.y, this.explosionradius)
    this.explosion.endFill();

  }
  this.update = function(deltaT,i) {
    if (this.hudsize > 0.2) {
      this.hudsize -= 0.01;
    }
    else  {

      if (checkForExplosion=== true) {
        shot[shotCount] = new Audio('https://www.freesound.org/data/previews/195/195396_3172867-lq.mp3');
        shot[shotCount].volume = .03;
        shot[shotCount].play();

        shotCount++;

        checkForExplosion = false;
        if (shotCount > 18) {
          shotCount = 0;
        }
      }
      if(this.shot===false) {
        this.beam.opacity = .5;
        checkForExplosion = true;
      }


      this.shot = true;
      this.beam.opacity = this.beam.opacity - .01;
      this.mod = 100000;
    }
    if (this.explosionradius < this.explosionradiusTg) {
      this.explosionradius += .3;
    }

    if (this.beam.opacity < 0) {
      //Splosion death
      this.beam.clear();
      targets.splice(i,1);
    }


    //Movement
    this.x = this.x - (Math.cos(player.spr.rotation)*player.vel);
    this.y = this.y - (Math.sin(player.spr.rotation)*player.vel);

    this.draw();
  }
}
