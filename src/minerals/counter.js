//player.minerals es count;
let counter = {};

function createCounter() {
  counter.counter = new PIXI.Sprite(
    PIXI.loader.resources['mineral'].texture
  )
  counter.counter.anchor.set(0.5,0.5);
  counter.text = new PIXI.Text('000',{fontFamily : 'Arial', fontSize: 24, fill : 0x0066ff, align : 'center'});

  counter.counter.x = appWidth-100;
  counter.text.x = appWidth-70;

  counter.counter.y = appHeight-40;
  counter.text.y = appHeight-50;

  stage.addChild(counter.counter);
  stage.addChild(counter.text);
}



function updateCounter() {
  let text = "";
  if (player.minerals < 10) {
    text = "00";
  }
  else if (player.minerals < 100) {
    text = "0";
  }
  else {
    text = "";
  }


  counter.text.text = text + player.minerals;
}
