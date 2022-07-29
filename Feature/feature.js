/** @type {HTMLCanvasElement} */

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 15;

// Setup our canvas for drawing
// Make two variables, width and height using destructuing, from the same named properties on our canvas object.
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'bevel';
ctx.lineCap = 'square';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
let shadowHue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.shadowColor = `hsl(${shadowHue}, 100%, 50%)`;
ctx.shadowBlur = 15;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  // increment the hue
  hue += 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  shadowHue += 10;
  ctx.shadowColor = `hsl(${shadowHue}, 100%, 50%)`;

  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // Move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// Clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
  ctx.beginPath(); // start the drawing again at a random point in state
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    ctx.moveTo(x, y);
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
