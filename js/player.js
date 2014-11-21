function Player() {
  this.x = 0;
  this.y = 0;
  this.velocity = 10;
  this.width = 30;
  this.height = 30;
}

Player.prototype.draw = function(context) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
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
      if(!(this.x <= 0)){  
        this.x -= this.velocity;
      }
      break;
    case "right":
      if(!(this.x>= Game.width - this.width)){
        this.x += this.velocity;
      }
      break;
    case "up":
      if(!(this.y<=0)){
        this.y -= this.velocity;
      }
      break;
    case "down":
      if(!(this.y>=Game.height-this.height)){
        this.y += this.velocity;
      }

      break;
  }
};

Player.prototype.checkCollision = function() {
  var context = this;
  var deleteThese = []
  _.each(Game.entities, function(entity, index) {
    if( Game.checkCollision(context, entity) ){
      deleteThese.push(index);
    }
  })
  if(deleteThese.length > 0){
    _.each(deleteThese, function(el) {
      Game.entities.splice(el, 1);
    });
  }

}



