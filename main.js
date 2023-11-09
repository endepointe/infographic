

// Get the path element
const path = document.getElementById('myPath');

// Get the total length of the path
const pathLength = path.getTotalLength();

// Set the stroke-dasharray and stroke-dashoffset initially
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

// Animate the drawing using JavaScript
function drawPath() {
  path.style.transition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = 0;
}

// Call the drawPath function after a delay (e.g., 1 second)
setTimeout(drawPath, 1000);

