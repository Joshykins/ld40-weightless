//player.minerals es count;
let counter = {};
let highscore = 0;
let highscoreText = "00";

function createCounter() {
  counter.counter = new PIXI.Sprite(
    PIXI.loader.resources['mineral'].texture
  );
  counter.counter.anchor.set(0.5,0.5);
  counter.text = new PIXI.Text('000',{fontFamily : 'Arial', fontSize: 24, fill : 0x0066ff, align : 'center'});

  counter.highscore = new PIXI.Text('000',{fontFamily : 'Arial', fontSize: 12, fill : 0xffffff, align : 'center'});
  counter.counter.x = appWidth-100;
  counter.text.x = appWidth-70;
  counter.highscore.x = appWidth-60;
  counter.counter.y = appHeight-40;
  counter.text.y = appHeight-50;
  counter.highscore.y = appHeight-60;

  counter.enemy = new PIXI.Sprite(
    PIXI.loader.resources['enemy'].texture
  );
  counter.enemy.anchor.set(0.5,0.5);
  counter.enemy.scale.set(0.5,0.5);
  counter.enemyCounter = new PIXI.Text('000',{fontFamily : 'Arial', fontSize: 24, fill : 0xff0000, align : 'center'});
  counter.enemy.x = appWidth-200;
  counter.enemy.y = appHeight-40;
  counter.enemyCounter .y = appHeight-50;
  counter.enemyCounter .x = appWidth-170;

  stage.addChild(counter.counter);
  stage.addChild(counter.text);
  stage.addChild(counter.highscore);
  stage.addChild(counter.enemy);
  stage.addChild(counter.enemyCounter);
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

  if (highscore < player.minerals ) {
    counter.highscore.text = text + player.minerals;
    highscore = player.minerals;
    highscoreText = text;
  } else {
    counter.highscore.text = text + highscore;
  }

  if (player.kills < 10) {
    text = "00";
  }
  else if (player.kills < 100) {
    text = "0";
  }
  else {
    text = "";
  }

  counter.enemyCounter.text = text + player.kills;
}
