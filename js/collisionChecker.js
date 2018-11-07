var CollisionChecker = {
    check: function(player1, player2, ball) {
        if (ball.x - ball.radius < player1.x + player1.width &&
            ball.y + ball.radius > player1.y &&
            ball.y - ball.radius < player1.y + player1.height) {
            ball.vx *= -1;
        }

        if (ball.x + ball.radius > player2.x &&
            ball.y + ball.radius > player2.y &&
            ball.y - ball.radius < player2.y + player2.height) {
            ball.vx *= -1;

        }

        if (ball.y >= canvas.height || ball.y - ball.radius < 0) {
            ball.vy *= -1;
        }
    }
}