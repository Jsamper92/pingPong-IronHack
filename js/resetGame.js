var ResetGame = {
    reset: function(player1, player2, ball, marcador1, marcador2, intervalID, width, start, game) {
        if (player2.x + player2.width + 30 === ball.x) {
            ball.vx *= -1;

            ball.x = width / 2;
            marcadorPlayer1 += 1;
            marcador1.x = Number(marcadorPlayer1);

            if (marcador1.x === 2) {
                if (confirm("Jugador 1 ha ganado la partida. ¿Quieres volver a jugar?")) {
                    clearInterval(intervalID);
                    marcadorPlayer1 = 0;
                    marcador1.x = marcadorPlayer1;

                    marcadorPlayer2 = 0;
                    marcador2.x = marcadorPlayer2;

                    marcador1 = new Marcador(0, 15);
                    marcador2 = new Marcador(0, 865);
                    game.start();
                    //marcadorPlayer1.x = Number(marcadorPlayer1 = 0)
                } else {
                    clearInterval(intervalID);
                    ball = 0;
                }
            }
        }
        if (player1.x - player1.width - 30 === ball.x) {
            ball.vx *= -1;
            ball.x = width / 2;
            marcadorPlayer2 += 1;
            marcador2.x = Number(marcadorPlayer2);
            if (marcador2.x === 2) {
                if (confirm("Jugador 2 ha ganado la partida. ¿Quieres volver a jugar?")) {
                    clearInterval(intervalID);
                    marcadorPlayer2 = 0;
                    marcador2.x = marcadorPlayer2;

                    marcadorPlayer1 = 0;
                    marcador1.x = marcadorPlayer1;

                    marcador1 = new Marcador(0, 15);
                    marcador2 = new Marcador(0, 865);
                    game.start();
                    //marcadorPlayer2.x = Number(marcadorPlayer2 = 0)
                } else {
                    clearInterval(intervalID);
                    ball = 0;

                }
            }
        }
    }
}