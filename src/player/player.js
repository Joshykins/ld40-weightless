
let player = {};
let trail = [];
player.minerals = 0;
player.kills = 0;

function createPlayer() {
  player.spr = new PIXI.Sprite(
    PIXI.loader.resources['player'].texture
  )
  player.spr.x = appWidth/2;
  player.spr.y = appHeight/2;

  player.resetText = new PIXI.Text('Minerals Stolen!',{fontFamily : 'Arial', fontSize: 24, fill : 0xff0000, align : 'center'});
  player.resetText.x = appWidth/2 - 100;
  player.resetText.y = appHeight/2 -60;
  player.resetText.alpha = 0;
  player.vel = 0;
  player.calcVel = 0;

  stage.addChild(player.spr);
  stage.addChild(player.resetText);
}



function updatePlayer(deltaT) {

  player.spr.anchor.set(.5,.5);
  player.spr.scale.set(.5,.5);

  if (keys.d) {
    player.spr.rotation += 2*deltaT;
  }
  if (keys.a) {
    player.spr.rotation -= 2*deltaT;
  }
  if(player.resetText.alpha > 0) {
    player.resetText.alpha -= .02;
  } else {
    player.resetText.alpha = 0;
  }
  log(player.resetText.alpha);
  if (player.calcVel < 5 || !keys.w) {
    if (keys.w) {

      player.calcVel += .2;

    } else if (player.calcVel > 0) {
      player.calcVel -= .4;
    } else {

      player.calcVel = 0;
    }
  } else {
    player.calcVel = 5;
  }


  if (keys.w) {
    trail.push(new Trails(player.spr.x - (Math.cos(player.spr.rotation)*30), player.spr.y - (Math.sin(player.spr.rotation)*30)))
    stage.addChild(trail[trail.length-1].trail)

  }
  player.vel = player.calcVel*(deltaT*40);
}


function Trails(tx,ty) {
  this.x = tx,
  this.y = ty,
  this.trail =  new PIXI.Graphics(),
  this.radius2 = (Math.random()*4)+5,


  this.draw = function() {
    this.trail.clear();
    this.trail.beginFill(0x00ff00);

    this.trail.drawCircle(this.x, this.y, this.radius2);
    this.trail.endFill();
  },

  this.update = function(deltaT, i) {
		this.radius2 = this.radius2 - 10*(deltaT);

		if (this.radius2 <= 0) {
      this.trail.destroy();
			trail.splice(i, 1);
			return;
		}
    //Account for movement
    this.x = this.x - (Math.cos(player.spr.rotation)*player.vel);
    this.y = this.y - (Math.sin(player.spr.rotation)*player.vel);

		this.draw();
	};

}




music = new Audio('assets/SpaceInvaders-zartix.mp3');
if (typeof music.loop == 'boolean')
{
    music.loop = true;
}
else
{
    music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
music.volume = 0.1;
music.play();
