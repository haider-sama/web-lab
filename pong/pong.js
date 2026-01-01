// Board
let board;
let boardWidth = 500;
let boardHeight = 500;
let ctx;

// Player 1 & 2
let playerWidth = 10;
let playerHeight = 50;

let player1 = createPlayer(10);
let player2 = createPlayer(boardWidth - playerWidth - 10);

// Ball
let ballWidth = 10;
let ballHeight = 10;
let ball = createBall();

let player1Score = 0;
let player2Score = 0;

window.onload = function() {
    board = document.getElementById("canvas");
    board.height = boardHeight;
    board.width = boardWidth;
    ctx = board.getContext("2d");

    // Draw player1
    ctx.fillStyle = "skyblue";
    document.addEventListener("keyup", movePlayer);

    // Start the game loop
    update();
};

function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, board.width, board.height);

    // Move players
    movePlayerPosition(player1);
    movePlayerPosition(player2);

    // Draw players
    drawPlayer(player1);
    drawPlayer(player2);

    // Move and draw ball
    moveBall();
    drawBall();

    // Handle collisions
    handleCollisions();

    // Update scores
    updateScores();

    // Draw dotted line down the middle
    drawMiddleLine();
}

function createPlayer(x) {
    return {
        x: x,
        y: boardHeight / 2 - playerHeight / 2,
        width: playerWidth,
        height: playerHeight,
        velocityY: 0
    };
}

function createBall() {
    return {
        x: boardWidth / 2 - ballWidth / 2,
        y: boardHeight / 2 - ballHeight / 2,
        width: ballWidth,
        height: ballHeight,
        velocityX: 1,
        velocityY: 2
    };
}

function drawPlayer(player) {
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function movePlayerPosition(player) {
    player.y += player.velocityY;

    // Ensure the player stays within the bounds
    if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.height > boardHeight) {
        player.y = boardHeight - player.height;
    }
}

function drawBall() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function moveBall() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Condition if ball touches top or bottom of canvas
    if (ball.y <= 0 || ball.y + ball.height >= boardHeight) {
        ball.velocityY *= -1;
    }
}

function handleCollisions() {
    // Bounce ball back
    if (detectCollision(ball, player1)) {
        bounceOffPlayer(player1);
    } else if (detectCollision(ball, player2)) {
        bounceOffPlayer(player2);
    }

    // GameOver
    if (ball.x < 0) {
        player2Score++;
        resetGame(1);
    } else if (ball.x + ball.width > boardWidth) {
        player1Score++;
        resetGame(-1);
    }
}

function bounceOffPlayer(player) {
    // If the ball touches the player, flip its x-direction and increase speed
    if (ball.x <= player.x + player.width || ball.x + ball.width >= player.x) {
        ball.velocityX = -ball.velocityX;
        increaseBallSpeed();
    }
}

function increaseBallSpeed() {
    // Increase the speed of the ball
    let speedMultiplier = 1.1;
    ball.velocityX *= speedMultiplier;
    ball.velocityY *= speedMultiplier;
}

function updateScores() {
    // Score
    ctx.font = "48px sans-serif";
    ctx.fillText(player1Score, boardWidth / 5, 45);
    ctx.fillText(player2Score, boardWidth * (4 / 5) - 45, 45);
}

function drawMiddleLine() {
    // Draw dotted line down the middle
    for (let i = 10; i < board.height; i += 25) {
        ctx.fillRect(board.width / 2 - 10, i, 5, 5);
    }
}

function outOfBounds(yPosition) {
    return yPosition < 0 || yPosition + playerHeight > boardHeight;
}

function movePlayer(e) {
    //player1
    if (e.code === "KeyW") {
        player1.velocityY = -3;
    } else if (e.code === "KeyS") {
        player1.velocityY = 3;
    }

    //player2
    if (e.code === "ArrowUp") {
        player2.velocityY = -3;
    } else if (e.code === "ArrowDown") {
        player2.velocityY = 3;
    }
}

document.addEventListener("keydown", movePlayer);
document.addEventListener("keyup", function(e) {
    // Stop player movement when key is released
    if (e.code === "KeyW" || e.code === "KeyS") {
        player1.velocityY = 0;
    }
    if (e.code === "ArrowUp" || e.code === "ArrowDown") {
        player2.velocityY = 0;
    }
});

function detectCollision(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

function resetGame(direction = 1) {
    // Reset ball to the center with initial speed
    ball = createBall();
    ball.velocityX = direction;
}