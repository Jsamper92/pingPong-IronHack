function Player(x, y, vx, vy) {
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 80;

    this.vx = vx;
    this.vy = vy;


}

Player.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.closePath();

}