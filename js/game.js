var Game = {  };
Game.fps = 60;
Game.points = 0;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
  this.pointsRender = document.getElementById("points");
  this.player = new Player();
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
  Game.player.draw(Game.context);
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  this.pointsRender.textContent = this.points;
  this.player.update();
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addRect = function() {
  this.entities.push(new Rect());
};
