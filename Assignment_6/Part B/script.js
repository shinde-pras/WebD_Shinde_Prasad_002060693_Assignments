// Select DOM Elements
const timeDisplay = document.getElementById("time-display");
const datePicker = document.getElementById("date-picker");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let stopwatchInterval; // Holds the interval ID for the stopwatch
let elapsedTime = { hours: 0, minutes: 0, seconds: 0 }; // Tracks elapsed time

// Disable manual editing of the date picker
datePicker.addEventListener("keydown", (e) => e.preventDefault());

// Function to format time as HH:MM:SS
function formatTime({ hours, minutes, seconds }) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Function to update the displayed time
function updateDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Function to increment time by one second
function incrementTime() {
    return new Promise((resolve) => {
        elapsedTime.seconds++;
        if (elapsedTime.seconds === 60) {
            elapsedTime.seconds = 0;
            elapsedTime.minutes++;
        }
        if (elapsedTime.minutes === 60) {
            elapsedTime.minutes = 0;
            elapsedTime.hours++;
        }
        resolve();
    });
}

// Start Button Click Event
startButton.addEventListener("click", async () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(async () => {
            await incrementTime();
            updateDisplay();
        }, 1000);
    }
});

// Stop Button Click Event
stopButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null; // Reset interval ID
});

// Reset Button Click Event
resetButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null; // Reset interval ID
    elapsedTime = { hours: 0, minutes: 0, seconds: 0 };
    updateDisplay();
});

// Initialize Display and Date Picker
updateDisplay();
datePicker.valueAsDate = new Date(); // Set default date to today
