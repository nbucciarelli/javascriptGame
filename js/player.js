function Player() {
  this.x = 300;
  this.y = 450;
  this.previousX = 300;
  this.previousY = 450;
  this.velocity = 5;
  this.width = 30;
  this.height = 30;
  this.direction = "up";
  this.train = [];
}

Player.prototype.draw = function(context) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
  _.each(this.train, function(trainEl) {
    trainEl.draw(context);
  });
};

Player.prototype.update = function() {
  this.previousX = this.x;
  this.previousY = this.y;
  if (Key.isDown(Key.UP) && this.direction != "down") this.changeDirection("up");
  if (Key.isDown(Key.LEFT) && this.direction != "right") this.changeDirection("left");
  if (Key.isDown(Key.DOWN) && this.direction != "up") this.changeDirection("down");
  if (Key.isDown(Key.RIGHT) && this.direction != "left") this.changeDirection("right");

  if (this.direction == "up") this.moveDirection("up");
  if (this.direction == "left") this.moveDirection("left");
  if (this.direction == "down") this.moveDirection("down");
  if (this.direction == "right") this.moveDirection("right");

};

Player.prototype.changeDirection = function(direction) {
  this.direction = direction;
};

Player.prototype.moveDirection = function(direction) {
  this.previousX = this.x;
  this.previousY = this.y;
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

Player.prototype.increaseVelocity = function() {
  this.velocity += 2;
};

Player.prototype.checkCollision = function() {
  var context = this;
  var deleteThese = [];
  _.each(Game.entities, function(entity, index) {
    if( Game.checkCollision(context, entity) ){
      Game.increasePoints(entity);
      deleteThese.push(index);
      Game.addRect();
      context.addToTrain();
    }
  });
  if(deleteThese.length > 0){
    _.each(deleteThese, function(el) {
      Game.entities.splice(el, 1);
    });
  }
};

Player.prototype.addToTrain = function() {
  this.train.push(new Train());
};

Player.prototype.updateTrain = function() {
  var context = this;
  // console.log(this.train);
  _.each(this.train, function(trainEl, index){
    var previousTrain = null;
    if(index == 0){
      previousTrain = context;
    }
    else {
      previousTrain = context.train[index-1];
    }
    trainEl.update(previousTrain);
  });
};

