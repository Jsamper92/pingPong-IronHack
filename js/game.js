var marcadorPlayer1 = 0;
var marcadorPlayer2 = 0;

var timeBall;

function Game() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.fps = 60;

    this.player1 = new Player(40, this.height / 2.3, 0, 80, 0);
    this.player2 = new Player(this.width - 40, this.height / 2.3, 0, 80, 0);

    this.line = new Player(this.width / 2, 0);

    this.ball = new Ball(100, 100, 0, 0, 2 * Math.PI);
    this.ball.x = this.width / 2;

    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    this.marcador1 = new Marcador(0, 15);
    this.marcador2 = new Marcador(0, 865);

    this.setListeners();
}
Game.prototype.colission = function() {
    CollisionChecker.check(this.player1, this.player2, this.ball);
}
Game.prototype.reset = function() {
    ResetGame.reset(this.player1, this.player2, this.ball, this.marcador1, this.marcador2, this.intervalID, this.width);
}
Game.prototype.draw = function() {
    this.ctx.beginPath();
    //linea de fondo
    this.line.drawLine();
    //jugadores
    this.player1.draw();
    this.player2.draw();
    //pelota
    this.ball.draw();
    //marcador
    this.marcador1.draw();
    this.marcador2.draw();
    this.ctx.closePath();
}

Game.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        //todo: consider adding a KeyboardManager object with a .manage(event, player1, player) method
        KeyboardManager.manage(event, this.player1, this.player2, this.height);
    }.bind(this)
}


Game.prototype.start = function() {

    this.intervalID = setInterval(function() {
        this.setListeners();
        this.ball.clear();
        this.draw();
        this.ball.move();
        this.colission();
        this.reset()


    }.bind(this), 1000 / this.fps)
}