//Controls player1
var KEY_UP = 87;
var KEY_DOWN = 83;

//Controls player2
var UP_KEY = 38;
var DOWN_KEY = 40;

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

    //todo: consider adding a function instead of calling the *almost* same code 
    if (this.player2.x + this.player2.width + 30 === this.ball.x) {
        this.ball.vx *= -1;

        this.ball.x = this.width / 2;
        marcadorPlayer1 += 1;
        this.marcador1.x = Number(marcadorPlayer1);

        if (this.marcador1.x === 2) {
            if (confirm("Jugador 1 ha ganado la partida. ¿Quieres volver a jugar?")) {
                marcadorPlayer1 = 0
                clearInterval(this.intervalID);
                this.marcador1 = new Marcador(0, 15);
                this.marcador2 = new Marcador(0, 865);
                this.start();
            } else {
                this.ball = 0;
            }
        }
    }

    if (this.player1.x - this.player1.width - 30 === this.ball.x) {
        this.ball.vx *= -1;
        this.ball.x = this.width / 2;
        marcadorPlayer2 += 1;
        this.marcador2.x = Number(marcadorPlayer2);
        if (this.marcador2.x === 2) {
            if (confirm("Jugador 2 ha ganado la partida. ¿Quieres volver a jugar?")) {
                marcadorPlayer2 = 0
                clearInterval(this.intervalID);
                this.marcador1 = new Marcador(0, 15);
                this.marcador2 = new Marcador(0, 865);
                this.start();
            } else {
                this.ball = 0;
            }


        }

    }
}







Game.prototype.draw = function() {

    this.ctx.beginPath();

    //jugadores
    this.player1.draw();
    this.player2.draw();

    //pelota
    this.ball.draw();



    //marcador
    //debugger
    this.marcador1.draw();
    this.marcador2.draw();

    this.ctx.closePath();
}

Game.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        //todo: consider adding a KeyboardManager object with a .manage(event, player1, player) method

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

        this.ball.move();
        this.ball.clear();

        this.colission();
        this.reset()
        this.draw();

    }.bind(this), 1000 / this.fps)
}