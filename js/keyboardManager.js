var KeyboardManager = {
    manage: function(event, player1, player2, height) {
        //Controls player1
        var KEY_UP = 87;
        var KEY_DOWN = 83;

        //Controls player2
        var UP_KEY = 38;
        var DOWN_KEY = 40;
        event.preventDefault();
        switch (event.keyCode) {
            case KEY_UP:
                //this.player1.y -= this.player1.vy;
                player1.y = Math.max(0, player1.y - 60);
                break;

            case KEY_DOWN:
                //this.player1.y += this.player1.vy;
                player1.y = Math.min(height - player1.height, player1.y + 70);
                break;
            case UP_KEY:
                //this.player2.y -= this.player2.vy;
                player2.y = Math.max(0, player2.y - 70);
                break;
            case DOWN_KEY:
                //this.player2.y += this.player2.vy;
                player2.y = Math.min(height - player2.height, player2.y + 70);
                break;
            default:
                break;
        }
    }
}