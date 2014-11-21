function Rect() {
  this.x = Math.floor(Math.random() * (640 - 30));
  this.y = Math.floor(Math.random() * (480 - 30));
  this.width = 30;
  this.height = 30;
  this.velocity = Math.random() > 0.5 ? -5 : 5;
  this.points = 10;
}

Rect.prototype.draw = function(context) {
  context.fillStyle = "black";
  context.fillRect(this.x, this.y, this.width, this.height);
};

Rect.prototype.update = function() {
  if (this.y < 0 || this.y > 450) {
    this.velocity = this.velocity * -1;
  }
  
  this.y += this.velocity;
};
