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



    this.player1 = new Player(40, this.height / 2.3, 0, 80, 0);
    this.player2 = new Player(this.width - 40, this.height / 2.3, 0, 80, 0);



    this.ball = new Ball(100, 100, 0, 0, 2 * Math.PI);
    this.ball.x = this.width / 2;


    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    this.marcador1 = new Marcador(0, 10);
    this.marcador2 = new Marcador(0, 870);



    this.setListeners();
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


Game.prototype.colission = function() {

    // if (this.ball.x + this.ball.radius >= this.canvas.width || this.ball.x - this.ball.radius < 0 /* || this.ball.x >= this.player1.width */ ) {
    //     this.ball.vx *= -1;
    // }

    if (this.ball.x - this.ball.radius < this.player1.x + this.player1.width &&
        this.ball.y + this.ball.radius > this.player1.y &&
        this.player1.x - this.player1.width > this.ball.x &&
        this.ball.y - this.ball.radius < this.player1.y + this.player1.height) {
        this.ball.vx *= -1;
    }

    if (this.ball.x + this.ball.radius > this.player2.x &&
        this.player2.x + this.player2.width > this.ball.x &&
        this.ball.y + this.ball.radius > this.player2.y &&
        this.ball.y - this.ball.radius < this.player2.y + this.player2.height) {
        this.ball.vx *= -1;
    }


    if (this.ball.y >= this.canvas.height || this.ball.y - this.ball.radius < 0) {
        this.ball.vy *= -1;
    }




}








Game.prototype.draw = function() {

    this.ctx.beginPath();

    //jugadores
    this.player1.draw();
    this.player2.draw();

    //pelota
    this.ball.draw();

    console.log(this.ball.x)

    //marcador
    //debugger
    this.marcador1.draw();
    this.marcador2.draw();

    this.ctx.closePath();
}

Game.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        event.preventDefault();
        switch (event.keyCode) {
            case KEY_UP:
                debugger
                //this.player1.y -= this.player1.vy;
                this.player1.y = Math.max(0, this.player1.y - 60);
                break;

            case KEY_DOWN:
                //this.player1.y += this.player1.vy;
                this.player1.y = Math.min(this.height - this.player1.height, this.player1.y + 70);
                break;
            case UP_KEY:
                //this.player2.y -= this.player2.vy;
                this.player2.y = Math.max(0, this.player2.y - 70);
                break;
            case DOWN_KEY:
                //this.player2.y += this.player2.vy;
                this.player2.y = Math.min(this.height - this.player2.height, this.player2.y + 70);
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
        this.ball.move();
        this.colission();

        this.draw();

    }.bind(this), 1000 / this.fps)
}