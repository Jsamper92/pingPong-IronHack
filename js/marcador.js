function Marcador(x, y, value) {
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 80;
    this.value = value;
}

Marcador.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = '30px serif';
    this.ctx.fillText(this.x, this.y, this.width, this.height);
    this.ctx.closePath();
}