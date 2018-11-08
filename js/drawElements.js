var DrawElements = {
    draw: function(ctx, line, player1, player2, ball, marcador1, marcador2) {
        ctx.beginPath();
        //linea de fondo
        line.drawLine();
        //jugadores
        player1.draw();
        player2.draw();
        //pelota
        ball.draw();
        //marcador
        marcador1.draw();
        marcador2.draw();
        ctx.closePath();
    }
}