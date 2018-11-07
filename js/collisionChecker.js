var CollisionChecker = {
    check: function(player1, player2, ball) {
        if (this.ball.x - this.ball.radius < this.player1.x + this.player1.width &&
            this.ball.y + this.ball.radius > this.player1.y &&
            this.ball.y - this.ball.radius < this.player1.y + this.player1.height) {
            this.ball.vx *= -1;
        }

        if (this.ball.x + this.ball.radius > this.player2.x &&
            this.ball.y + this.ball.radius > this.player2.y &&
            this.ball.y - this.ball.radius < this.player2.y + this.player2.height) {
            this.ball.vx *= -1;

        }

        if (this.ball.y >= this.canvas.height || this.ball.y - this.ball.radius < 0) {
            this.ball.vy *= -1;
        }
    }
}