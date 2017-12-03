

let _t;

function animationLoop() {
  var t = Date.now();
	var deltaT = (t - _t)/1000;

  requestAnimationFrame(animationLoop);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update(deltaT);
  }
  updatePlayer(deltaT);
  asteroidCreator();
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].update(deltaT, i);
  }

//  for (var i = 0; i < targets.length; i++) {
//    targets[i].update(deltaT);
//  }

	_t = t;
  renderer.render(stage);

}
