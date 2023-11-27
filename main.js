// Get the span elements for hours, minutes, and seconds
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the countdown time to a placeholder value (in milliseconds)
const countdownTime = new Date().getTime() + 24 * 60 * 60 * 1000;

// Function to update the timer
function updateTimer() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = countdownTime - currentTime;

  // Calculate the hours, minutes, and seconds
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the timer elements
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

// Update the timer every second
setInterval(updateTimer, 1000);