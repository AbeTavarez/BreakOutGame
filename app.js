//* Variables
const showRulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

//* ========== Canvas
// gets canvas container
const canvas = document.getElementById("canvas");
// inits canvas context
const ctx = canvas.getContext("2d");

//* =========== Ball Props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visible: true
};

//* ========== Draw ball on canvas
const drawBall = () => {
  ctx.beginPath(); // drawing path
  // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); //create circle (ball)
  ctx.fillStyle = "#0095dd"; // color to fill the circle
  ctx.fill(); // fills the circle
  ctx.closePath();
};

//* ========== Paddle Props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
  visible: true
};

//* ============ Draw Paddle
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#0095dd"; // color to fill the circle
  ctx.fill(); // fills the circle
  ctx.closePath();
};

//* ========== Create brick Props
const brinkProps = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

//* ============ Create Bricks
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = []; // create 9 (rows) arrays inside bricks array [ [], [], ...]
  for (let j = 0; j < brickColumnCount; j++) {
    // create 5 columns
    // create x value; i = row iteration
    const x = i * (brinkProps.w + brinkProps.padding) + brinkProps.offsetX;
    // create y value
    const y = j * (brinkProps.h + brinkProps.padding) + brinkProps.offsetY;
    // brick array + [current iteration] + [column] = to an object
    bricks[i][j] = { x, y, ...brinkProps }; // array with columns and bricks inside
  }
}
console.log(bricks);

const drawBricks = () => {
  bricks.forEach((column) => {
    column.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? "#0095dd" : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
};

//* ========= Draw score on canvas
const drawScore = () => {
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
};

//* ========= Move paddle on canvas
const movePaddle = () => {
  paddle.x += paddle.dx;

  // wall detection
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
};

//* ========== Draw game board
const drawGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
};

//* Update canvas drawing and animation
const update = () => {
  movePaddle();
  // Draw
  drawGame();
  requestAnimationFrame(update)
};
update();

//* ========================================= Events Listeners for

// Adds event listener to the show rules
showRulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

// Adds event listener to the close button
closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});

//* ====== Keyboard Events
const keyDown = (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") {
    paddle.dx = paddle.speed;

  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    paddle.dx =- paddle.speed;
  }
};

const keyUp = (e) => {
  if (
    e.key === "Right" ||
    e.key === "ArrowRight" ||
    e.key === "Left" ||
    e.key === "ArrowLeft"
  ) {
    paddle.dx = 0;
  }
};

//* ======== Keyboard event listeners
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
