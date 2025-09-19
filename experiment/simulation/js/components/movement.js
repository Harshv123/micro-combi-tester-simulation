// Get references to the buttons and the moveable object
const moveButton = document.getElementById('moveButton');
const calibrationButton = document.getElementById('calibrationButton');
const moveToMidButton = document.getElementById('moveToMidButton');

const moveRightButton = document.getElementById('moveRightButton');
const moveToUpButton = document.getElementById('moveToUpButton');
const moveable = document.querySelector('.moveable');

// Get references to the instruction section and the next button name
const instructionSection = document.getElementById('instructionSection');
const nextButtonName = document.getElementById('nextButtonName');

// Store the initial position of the object
const initialPosition = { x: 295.66, y: 51.75 };

// Track the current step in the sequence
let currentStep = 0;

// Disable all buttons initially except the first one
calibrationButton.disabled = true;
moveToMidButton.disabled = true;
moveRightButton.disabled = true;
moveToUpButton.disabled = true;

// Function to highlight the active button and update instructions
function updateUI() {
  moveButton.classList.remove('highlighted-button');
  calibrationButton.classList.remove('highlighted-button');
  moveToMidButton.classList.remove('highlighted-button');
  moveRightButton.classList.remove('highlighted-button');
  moveToUpButton.classList.remove('highlighted-button');

  switch (currentStep) {
    case 0:
      moveButton.classList.add('highlighted-button');
      nextButtonName.textContent = 'Calibration➡️';
      break;
    case 1:
      calibrationButton.classList.add('highlighted-button');
      nextButtonName.textContent = 'Calibration⬅️';
      break;
    case 2:
      moveToMidButton.classList.add('highlighted-button');
      nextButtonName.textContent = 'Microscope';
      break;
    case 3:
      moveRightButton.classList.add('highlighted-button');
      nextButtonName.textContent = 'Position Under Indenter';
      break;
    case 4:
      moveToUpButton.classList.add('highlighted-button');
      nextButtonName.textContent = 'Scratch';
      break;
    default:
      break;
  }
}

// Function to enable the next button in the sequence
function enableNextButton() {
  currentStep++;
  switch (currentStep) {
    case 1:
      calibrationButton.disabled = false;
      break;
    case 2:
      moveToMidButton.disabled = false;
      break;
    case 3:
      moveRightButton.disabled = false;
      break;
    case 4:
      moveToUpButton.disabled = false;
      break;
    default:
      break;
  }
  updateUI();
}

// Movement functions
function moveObjectsX() {
  moveable.style.transition = 'transform 5s ease';
  moveable.style.transform = `translateX(-60px) translateY(99px)`;
  moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

function calibrationMovement() {
  moveable.style.transition = 'transform 5s ease';
  moveable.style.transform = `translateX(-200px) translateY(100px)`;
  moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

function moveToMid() {
  moveable.style.transition = 'transform 5s ease';
  moveable.style.transform = `translateX(-99px) translateY(100px)`;
  moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

function moveRight() {
  moveable.style.transition = 'transform 5s ease';
  moveable.style.transform = `translateX(-135px) translateY(100px)`;
  moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

function moveToUp() {
  moveable.style.transition = 'transform 5s ease';
  moveable.style.transform = 'translateX(-135px) translateY(57px)';

  // After moving up, start pen rotation
  moveable.addEventListener(
    'transitionend',
    () => {
      enableNextButton();
      movePen(); // ✅ Start pen animation
    },
    { once: true }
  );
}

// Attach event listeners
moveButton.addEventListener('click', moveObjectsX);
calibrationButton.addEventListener('click', calibrationMovement);
moveToMidButton.addEventListener('click', moveToMid);
moveRightButton.addEventListener('click', moveRight);
moveToUpButton.addEventListener('click', moveToUp);

document.getElementById("moveToMidButton").addEventListener("click", () => {
  document.getElementById("fixedDiv").style.display = "block";
});

// ====================
// Pen animation function
// ====================
function movePen() {
  const pen = document.getElementById("penImg");

  // Disc reference (from your transform)
  const discX = 170.7; 
  const discY = 100.9; 

  // Approximate disc width (adjust as per your SVG disc size × scale)
  const discWidth = 300;  

  // Pen scaling
  const scaleX = 0.1008;
  const scaleY = 0.1008;

  // Total animation duration (seconds)
  const totalDuration = 9;

  // Time for one left→right or right→left pass
  const passDuration = 3;  

  // Save initial position
  const initialTransform = "matrix(0.1008 0 0 0.1008 250.7 100.9)";

  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = (time - startTime) / 1000;

    if (elapsed >= totalDuration) {
      // Reset after totalDuration
      pen.setAttribute("transform", initialTransform);
      return;
    }

    // Find how many passes completed
    const passProgress = (elapsed % passDuration) / passDuration; // 0 → 1
    const passCount = Math.floor(elapsed / passDuration);

    let x;
    if (passCount % 2 === 0) {
      // Left → Right
      x = discX + passProgress * discWidth;
    } else {
      // Right → Left
      x = discX + (1 - passProgress) * discWidth;
    }

    const y = discY; // keep vertical fixed

    // Apply transform
    pen.setAttribute("transform", `matrix(${scaleX} 0 0 ${scaleY} ${x} ${y})`);

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}



// Initialize UI
updateUI();
