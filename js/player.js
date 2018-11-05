function Player(x, y, vx, vy) {
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 2;
    this.height = 50;

    this.vx = vx;
    this.vy = vy;


    this.score = 0;

    //movimiento barras
    this.setListeners();
}

Player.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.closePath();

}

Player.prototype.setListeners = function() {
    document.onkeydown = function(e) {
        e.preventDefault();
        switch (e.keyCode) {
            case KEY_UP:
                this.y -= this.vy;
                break;
            case KEY_DOWN:
                this.y += this.vy;
                break;
        }
    }.bind(this);
}