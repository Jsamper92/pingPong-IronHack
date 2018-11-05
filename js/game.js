function Game() {
    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;

    this.ctx.fillStyle = "white";

    this.player1 = new Player(20, this.height / 2);
    this.player2 = new Player(this.width - 20, this.height / 2);

    this.ball = new Ball(100, 100, 0, 0, 2 * Math.PI);
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;




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




Game.prototype.start = function() {
    this.draw();
    this.update();
}