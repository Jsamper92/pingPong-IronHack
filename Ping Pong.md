# Ping Pong

## Introducción
> Ping pong es un juego basado en una experiencia multijugador que simula un partido de tenis, cada jugador controla una paleta y su objetivo es conseguir los máximos puntos antes de que se termine la partida, los puntos se consiguen cuando el oponente falla al devolver la pelota.

## Mayor reto
>Colisiones con el eje X, donde si la pelota cruzaba con las paletas rebotasen.

```
var CollisionChecker = {
    check: function(player1, player2, ball, audio, audioDos) {
        if (ball.x - ball.radius < player1.x + player1.width &&
            ball.y + ball.radius > player1.y &&
            ball.y - ball.radius < player1.y + player1.height) {
            audio.play();
            ball.vx *= -1;


        }

        if (ball.x + ball.radius > player2.x &&
            ball.y + ball.radius > player2.y &&
            ball.y - ball.radius < player2.y + player2.height) {
            audioDos.play();
            ball.vx *= -1;


        }

        if (ball.y >= canvas.height || ball.y - ball.radius < 0) {
            ball.vy *= -1;
        }
    }
}
```


## Posibles mejoras
>Generaria obstáculos aleatorios donde los jugadores no solo tendrián que estar pendientes de conseguir rebotar la pelota, si no de que al hacerlo pudiese aparecer un obstáculo que retornase de nuevo la pelota a su posición.

## ¿De qué estoy orgulloso?
>En primer lugar, de haber sacado adelante un proyecto que hace tan solo 2 semanas no sabría ni por dónde empezar. En segundo lugar, las colisiones que me ha hecho odiar al pong de por vida.

## ¿Si empezase desde 0 elegiría otro proyecto?
>Viendolo en perspectiva, posiblemente elegiría otro, no por la complejidad que me ha llevado, sino porque con los conocimientos que he obtenido, se que con tiempo podría sacar adelante otros proyectos más enrevesados.