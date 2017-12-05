const log = console.log;
PIXI.utils.sayHello();
let bg = document.getElementById('display');

let renderer = PIXI.autoDetectRenderer(appWidth, appHeight, {
  transparent: false,
  resolution: 1,
  backgroundColor:0x000000,
  clearBeforeRender:true,
  autoResize:true
});


document.getElementById('display').appendChild(renderer.view);
let stage = new PIXI.Container();




PIXI.loader
  .add("player", "assets/ship.png")
  .add("asteroid", "assets/asteroid.png")
  .add("mineral", "assets/minerals.png")
  .add("lockon", "assets/lockon.png")
  .add("enemy", "assets/shipEvil.png")
  .load(setup);



function setup() {

  createStars();
  createPlayer();
  createCounter();
  animationLoop();
}

function resetGame() {
 player.minerals = 0;
 player.kills = 0;
 enemyCount = 0;
 player.resetText.alpha = 1;
}
