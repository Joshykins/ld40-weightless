let enemyStuff = {};
let enemies = [];
let enemyRealCount = 0;
let enemyCount = 1;
let enemiesSpawned = 0;
function enemyCreator() {

  while (enemyRealCount< enemyCount) {
    enemyRealCount++;
    log("ran2");
    let rando1 =  Math.random() >= 0.5;
    let rando2 =  Math.random() >= 0.5;
    let rando3 =  Math.random() >= 0.5;
    if(rando1) {
      if(rando2) {
        enemyStuff.x = Math.floor(Math.random()*appWidth);
        enemyStuff.y = -100;
      }
      else {
        enemyStuff.x = Math.floor(Math.random()*appWidth);
        enemyStuff.y = appHeight+100;
      }
    }
    else {
      if(rando3) {
        enemyStuff.y = Math.floor(Math.random()*appHeight);
        enemyStuff.x = -100;
      }
      else {
        enemyStuff.y = Math.floor(Math.random()*appHeight);
        enemyStuff.x = appWidth+100;
      }
    }
    //Debug reset
    enemyStuff.y = 200;
    enemyStuff.x = 200;
    log("ran");
    enemies[enemiesSpawned] = new Enemy(enemyStuff.x, enemyStuff.y);
    stage.addChild(enemies[enemiesSpawned].enemy);

    enemiesSpawned++;
  }



}


function Enemy(x, y) {
  this.enemy = new PIXI.Sprite(
    PIXI.loader.resources['enemy'].texture
  );

  this.x = x,
  this.y = y,
  this.kaboomed = false;
  this.mod = 0;
  this.rotation = 0;
  this.movespeed = 6;
  this.enemy.anchor.set(0.5,0.5),
  this.radius = 40,
  this.enemy.scale.set(5,5),

  this.draw = function() {
    //Nothing to be redrawn, I think
    this.enemy.x = this.x+this.mod;
    this.enemy.y = this.y+this.mod;
    this.enemy.rotation = this.rotation;
    //Function to offset when killed


  },

  this.update = function(deltaT, i) {





    //player Movement
    this.x = this.x - (Math.cos(player.spr.rotation)*player.vel);
    this.y = this.y - (Math.sin(player.spr.rotation)*player.vel);

    //Additional movement
    this.x = this.x + (Math.cos(player.spr.rotation)*this.movespeed*deltaT);
    this.y = this.y + (Math.sin(player.spr.rotation)*this.movespeed*deltaT);

    //Angle arctan (y1-y2,x1-x2) 2=ship 1=enemy
    this.rotation = Math.atan2(this.y-appHeight/2,this.x-appWidth/2);

    //Loop through targets to see if intersect.
    if(checkForExplosion) {
      for (var i = 0; i < targets.length; i++) {
        if(targets[i].shot) {
          if(withinRadius(targets[i].x,targets[i].y,this.x,this.y,targets[i].explosionradius)) {
            if (this.kaboomed === false) {
              this.mod = 500000;
            }

            this.kaboomed = true;
          }
        }
      }
    }

    this.draw();
  }

};
