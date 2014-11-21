var renderStats = new Stats();
document.body.appendChild(renderStats.domElement);

var updateStats = new Stats();
document.body.appendChild(updateStats.domElement);

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

Game.initialize();

// Add some moving rectangles
var i = 1;
while (i--) Game.addRect();

Game.run = (function() {

  // Unlocks the draw and update loops.
  // Game will not run slower if the rendering slows down
  var loops = 0;
  var skipTicks = 1000 / Game.fps;
  var maxFrameSkip = 10;
  var nextGameTick = (new Date).getTime();

  return function() {
    loops = 0;

    while ((new Date).getTime() > nextGameTick) {
      updateStats.update();
      Game.update();
      nextGameTick += skipTicks;
      loops++;
    }

    renderStats.update();
    Game.draw();
  };
})();

// Uses new rendering techniques
(function() {
  var onEachFrame;
  if (window.webkitRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); };
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); mozRequestAnimationFrame(_cb); };
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    };
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(Game.run);






