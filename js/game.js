var KEY_UP = 38;
var KEY_DOWN = 40;
var UP_KEY = 87;
var DOWN_KEY = 83;

function Game() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.fps = 60;

    this.ctx.fillStyle = "white";

    this.player1 = new Player(20, this.height / 2.3, 0, 80);
    this.player2 = new Player(this.width - 20, this.height / 2.3, 0, 80);
    this.player1.y = this.player1.vy;


    this.ball = new Ball(100, 100, 0, 0, 2 * Math.PI);
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;

    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    this.setListeners();
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.move = function() {
    this.ball.move();
    if (this.ball.x >= this.width || this.ball.x - this.ball.radius < 0) {
        this.ball.vx *= -1;
    }

    if (this.ball.y >= this.height || this.ball.y - this.ball.radius < 0) {
        this.ball.vy *= -1;
    }
}

Game.prototype.draw = function() {

    this.ctx.beginPath();

    //jugadores
    this.player1.draw();
    this.player2.draw();

    // //pelota
    this.ball.draw();

    this.ctx.closePath();
}

Game.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        event.preventDefault();
        switch (event.keyCode) {
            case KEY_UP:
                this.player1.y -= this.player1.vy;
                break;

            case KEY_DOWN:
                this.player1.y += this.player1.vy;
                break;
            case UP_KEY:
                this.player2.y -= this.player2.vy;
                break;
            case DOWN_KEY:
                this.player2.y += this.player2.vy;
                break;
            default:
                break;
        }
    }.bind(this)
}



Game.prototype.start = function() {
    setInterval(function() {
        this.setListeners();
        this.clear();
        this.move();
        this.draw();

    }.bind(this), 1000 / this.fps)
}