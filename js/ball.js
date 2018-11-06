function Ball(x, y, vx, vy, radius) {
    this.canvas = this.canvas;
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.vx = 5;
    this.vy = 5;
    this.radius = radius;

    this.width = this.with;
    this.height = this.height;

}
//borramos rastro pelota
Ball.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

//dibujamos pelota
Ball.prototype.draw = function() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
    //movimiento pelota
Ball.prototype.move = function() {
    this.x -= this.vx;
    this.y -= this.vy;
}


Ball.prototype.colission = function() {
    if (this.x >= this.width || this.x - this.radius < 0) {
        this.vx *= -1;
    }


    if (this.y >= this.height || this.y - this.radius < 0) {
        this.vy *= -1;
    }
}