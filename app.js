//* Variables
const showRulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
let score = 0;
const brickRowCount = 9;
const brickColumnCount = 5;

//* ========== Events Listeners for 

// Adds event listener to the show rules 
showRulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
});

// Adds event listener to the close button
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})


//* ========== Canvas 
// gets canvas container
const canvas = document.getElementById('canvas');
// inits canvas context
const ctx = canvas.getContext('2d');

//* Ball Props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

//* ========== Draw ball on canvas
const drawBall = () => {
    ctx.beginPath(); // drawing path
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); //create circle (ball)
    ctx.fillStyle = '#0095dd'; // color to fill the circle
    ctx.fill(); // fills the circle
    ctx.closePath();
}

//* ========== Paddle Props
const paddle = {
    x: canvas.width /2 -40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0
};

//* ============ Draw Paddle
const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#0095dd'; // color to fill the circle
    ctx.fill(); // fills the circle
    ctx.closePath();
};


//* ========= Draw score on canvas
const drawScore = () => {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
};

//* ========== Draw game board
const drawGame = () => {
    drawBall();
    drawPaddle();
    drawScore();
};


drawGame();


