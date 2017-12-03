
let player = {};

function createPlayer() {
  player.spr = new PIXI.Sprite(
    PIXI.loader.resources['player'].texture
  )
  player.spr.x = bg.offsetWidth/2;
  player.spr.y = bg.offsetHeight/2;

  player.vel = 0;

  stage.addChild(player.spr);
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


  if (player.vel < 5 || !keys.w) {
    if (keys.w) {

      player.vel += .2;

    } else if (player.vel > 0) {
      player.vel -= .4;
    } else {
      player.vel = 0;
    }
  } else {
    player.vel = 5;
  }





}


myAudio = new Audio('assets/SpaceInvaders-zartix.mp3');
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.volume = 0.2;
myAudio.play();
