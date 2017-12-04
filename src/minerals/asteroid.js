let asteroidStuff = {};
let asteroids  = [];
let asteroidRealCount = 0;
let asteroidsSpawned = 0;

function asteroidCreator() {

  while (asteroidRealCount < asteroidCount) {
    asteroidRealCount++;
    let rando = Math.random() >= 0.5;
    if (rando) {
      asteroidStuff.x = Math.floor(Math.random()*appWidth);
      asteroidStuff.y = -100;
    }
    else {
      asteroidStuff.x = -100;
      asteroidStuff.y = Math.floor(Math.random()*appHeight);
    }

    asteroidStuff.xV = (Math.random()*2)-1;
    asteroidStuff.yV = (Math.random()*2)-1;

    asteroids[asteroidsSpawned] = new Asteroid(asteroidStuff.x, asteroidStuff.y, asteroidStuff.xV, asteroidStuff.yV);
    stage.addChild(asteroids[asteroidsSpawned].asteroid);
    stage.addChild(asteroids[asteroidsSpawned].mineralText);

    asteroidsSpawned++;


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
  this.kaboomed = false;
  this.mod = 0;
  this.textA = 0;

  this.yV = yV,
  this.rotation = (Math.random()*.02)-.01,
  this.asteroid.anchor.set(0.5,0.5),
  this.radius = 70,
  this.mineralText = new PIXI.Text('+1 Mineral',{fontFamily : 'Arial', fontSize: 24, fill : 0x0066ff, align : 'center'});
  this.asteroid.scale.set(.5,.5),

  this.draw = function() {
    //Nothing to be redrawn, I think
    this.asteroid.x = this.x+this.mod;
    this.asteroid.y = this.y+this.mod;
    this.asteroid.rotation += this.rotation;


    this.mineralText.x =  this.x - 20;
    this.mineralText.y = this.y + 20;
    this.mineralText.alpha = this.textA;
  },

  this.update = function(deltaT, i) {
    if (this.x > appWidth + this.radius) {
      this.x = -this.radius;

    } else if (this.x < 0 - this.radius) {
      this.x = appWidth + this.radius;
    }


    if (this.y > appHeight + this.radius) {
      this.y = -this.radius;

    } else if (this.y < 0 - this.radius) {
      this.y = appHeight + this.radius;
    }



    //Drift
    this.x = this.x + this.xV;
    this.y = this.y +this.yV;


    //Movement
    if(!this.kaboomed) {

      this.x = this.x - (Math.cos(player.spr.rotation)*player.vel);
      this.y = this.y - (Math.sin(player.spr.rotation)*player.vel);
    }

    //Loop through targets to see if intersect.
    if(checkForExplosion) {
      for (var i = 0; i < targets.length; i++) {
        if(targets[i].shot) {
          if(withinRadius(targets[i].x,targets[i].y,this.x,this.y,targets[i].explosionradius)) {
            if (this.kaboomed === false) {
              this.mod = 500000;
              this.textA = 1;
              asteroidRealCount--;
              player.minerals++;
            }

            this.kaboomed = true;
          }
        }
      }
    }

    if (this.kaboomed) {
      this.textA -= .03;
    }
    if (this.textA < 0) {

    }

    this.draw();
  }

};
