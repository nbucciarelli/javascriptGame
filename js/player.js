function Player() {
  this.x = 0;
  this.y = 0;
  this.velocity = 10;
}

Player.prototype.draw = function(context) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, 30, 30);
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP)) this.moveDirection("up");
  if (Key.isDown(Key.LEFT)) this.moveDirection("left");
  if (Key.isDown(Key.DOWN)) this.moveDirection("down");
  if (Key.isDown(Key.RIGHT)) this.moveDirection("right");
};

Player.prototype.moveDirection = function(direction) {
  switch(direction){
    case "left":
      this.x -= this.velocity;
      break;
    case "right":
      this.x += this.velocity;
      break;
    case "up":
      this.y -= this.velocity;
      break;
    case "down":
      this.y += this.velocity;
      break;
  }
};



