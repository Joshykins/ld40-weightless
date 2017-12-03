const log = console.log;
PIXI.utils.sayHello();
let bg = document.getElementById('display');

let renderer = PIXI.autoDetectRenderer(bg.offsetWidth, bg.offsetHeight, {
  transparent: false,
  resolution: 1,
  backgroundColor:0x000000,
  clearBeforeRender:true
});


document.getElementById('display').appendChild(renderer.view);
let stage = new PIXI.Container();




PIXI.loader
  .add("player", "assets/ship.png")
  .add("asteroid", "assets/asteroid.png")
  .add("lockon", "assets/lockon.png")
  .load(setup);



function setup() {

  createStars();
  createPlayer();
  animationLoop();
}
