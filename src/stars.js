let stars = [];
let starStuff = {};

function createStars() {
  for (var i = 0; i < 180; i++) {
    starStuff.opacity =  Math.random()*1;
    starStuff.radius =  Math.floor(Math.random()*1)+1;
    starStuff.x = Math.floor(Math.random()*appWidth);
    starStuff.y = Math.floor(Math.random()*appHeight);
    stars[i] = new Star(starStuff.x, starStuff.y, starStuff.opacity, 0, 0, starStuff.radius);
    stars[i].draw();
  }
  for (var i = 0; i < stars.length; i++) {
    stage.addChild(stars[i].star);
  }
}
function Star(x, y, opacity, xV, yV, radius) {
  this.star = new PIXI.Graphics();
  this.x = x,
  this.y = y,
  this.opacity = opacity,
  this.xV = xV,
  this.yV = yV,
  this.opacityAdjust = .01,
  this.radius = radius,
  this.opacityToggle = Math.random() >= 0.5, //True increment/ false decrement
  this.stagnation = Math.random();
  this.draw = function() {
    this.star.clear();
    this.star.beginFill(0xffffff,this.opacity)
    this.star.drawCircle(this.x, this.y, this.radius)
    this.star.endFill();
  },

  this.update = function(deltaT) {
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



    if (this.opacity > 1) {
      this.opacityToggle = false;
    }
    else if (this.opacity < 0) {
      this.opacityToggle = true;
    }



    if (this.opacityToggle) {
      this.opacity += this.opacityAdjust;
    }
    else {
      this.opacity -= this.opacityAdjust;
    }
    //Movement
    this.x = this.x - (Math.cos(player.spr.rotation)*player.vel)*this.stagnation;
    this.y = this.y - (Math.sin(player.spr.rotation)*player.vel)*this.stagnation;




    this.draw();
  }

};
