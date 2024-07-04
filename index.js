let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;

  // Add exciting features!
  confettiCelebration(); // Call confetti function
  playSound("tada.mp3"); // Play celebratory sound (replace with your desired audio file)
}

function confettiCelebration() {
  // Code to create a confetti animation (replace with your desired confetti implementation)
  console.log("Celebrating with confetti!"); // Placeholder for now
}

function playSound(audioFile) {
  // Code to play an audio file (replace with your desired audio library)
  console.log(`Playing sound: ${audioFile}`); // Placeholder for now
}
