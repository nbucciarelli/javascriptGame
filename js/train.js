function Train() {
  this.x = 300;
  this.y = 450;
  this.previousX = 300;
  this.previousY = 450;
  this.width = 30;
  this.height = 30;
}

Train.prototype.draw = function(context) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
};

Train.prototype.update = function(previous) {
  this.previousX = this.x;
  this.previousY = this.y;
  this.x = previous.previousX;
  this.y = previous.previousY;
};
