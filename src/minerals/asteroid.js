let asteroidStuff = {};
let asteroids  = [];
let asteroidRealCount = 0;


function asteroidCreator() {
  let j = 0;
  while (asteroidRealCount < asteroidCount) {
    asteroidRealCount++;
    asteroidStuff.x = Math.floor(Math.random()*bg.offsetWidth);
    asteroidStuff.y = Math.floor(Math.random()*bg.offsetHeight);
    asteroidStuff.xV = (Math.random()*2)-1;
    asteroidStuff.yV = (Math.random()*2)-1;
    log(asteroidStuff.x);
    asteroids[j] = new Asteroid(asteroidStuff.x, asteroidStuff.y, asteroidStuff.xV, asteroidStuff.yV);
    stage.addChild(asteroids[j].asteroid);
    j++;


  }



}


function  Asteroid(x, y, xV, yV, radius) {
  this.asteroid = new PIXI.Sprite(
    PIXI.loader.resources['asteroid'].texture
  );

  this.x = x,
  this.y = y,
  this.lockedon = false;
  this.xV = xV,
  this.yV = yV,
  this.rotation = (Math.random()*.02)-.01,
  this.asteroid.anchor.set(0.5,0.5),
  this.radius = 70,
  this.asteroid.scale.set(.5,.5),
  this.draw = function() {
    //Nothing to be redrawn, I think
    this.asteroid.x = this.x;
    this.asteroid.y = this.y;
    this.asteroid.rotation += this.rotation;
  },

  this.update = function(deltaT, i) {
    if (this.x > bg.offsetWidth + this.radius) {
      this.x = -this.radius;

    } else if (this.x < 0 - this.radius) {
      this.x = bg.offsetWidth + this.radius;
    }


    if (this.y > bg.offsetHeight + this.radius) {
      this.y = -this.radius;

    } else if (this.y < 0 - this.radius) {
      this.y = bg.offsetHeight + this.radius;
    }

    //Drift
    this.x = this.x + this.xV;
    this.y = this.y +this.yV;


    //Movement
    this.x = this.x - (Math.cos(player.spr.rotation)*player.vel);
    this.y = this.y - (Math.sin(player.spr.rotation)*player.vel);

    //Lockon?
    if (withinRadius(this.x,this.y, mouse.x,mouse.y,this.radius)) {
      if (this.lockedon === false) {
        log(i);

        this.lockedon = true;
      }
    }

    this.draw();
  }

};
