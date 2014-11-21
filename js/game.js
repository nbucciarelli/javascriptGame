var Game = {  };
Game.fps = 60;
Game.points = 0;
Game.width = 640;
Game.height = 480;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  this.pointsRender = document.getElementById("points");
  this.player = new Player();
};

Game.draw = function() {
  this.context.clearRect(0, 0, this.width, this.height);
  Game.player.draw(Game.context);
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  this.pointsRender.textContent = this.points;
  this.player.update();
  this.player.checkCollision();
  for (var i=0; i < this.entities.length; i++) {
    // this.entities[i].update();
  }
};

Game.addRect = function() {
  this.entities.push(new Rect());
};

Game.checkCollision = function(a, b) {
  // console.log(a);
  // console.log(b);
  return (Math.abs(a.x - b.x) * 2 < (a.width + b.width)) &&
         (Math.abs(a.y - b.y) * 2 < (a.height + b.height));
}