

let _t;

function animationLoop() {
  var t = Date.now();
	var deltaT = (t - _t)/1000;
  if (isNaN(deltaT)) {
    deltaT = 0;
  }
  requestAnimationFrame(animationLoop);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update(deltaT);
  }
  updatePlayer(deltaT);
  updateCounter();
  asteroidCreator();
  enemyCreator();
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].update(deltaT, i);
  }
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].update(deltaT, i);
  }

  for (var i = 0; i < targets.length; i++) {
    targets[i].update(deltaT,i);
  }

  for (var i = 0; i < trail.length; i++) {
    trail[i].update(deltaT, i);
  }
	_t = t;
  renderer.render(stage);
}
