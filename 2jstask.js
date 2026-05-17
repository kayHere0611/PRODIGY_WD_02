"use strict";
// Variables with explicit types
let timer;
let totalMS = 0;
let running = false;
// Get elements and cast them to specific HTML types
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
/**
 * Formats the time and updates the display
 */
function updateDisplay() {
    const hrs = Math.floor(totalMS / 3600000);
    const mins = Math.floor((totalMS % 3600000) / 60000);
    const secs = Math.floor((totalMS % 60000) / 1000);
    const ms = Math.floor((totalMS % 1000) / 10);
    const hrsStr = String(hrs).padStart(2, '0');
    const minsStr = String(mins).padStart(2, '0');
    const secsStr = String(secs).padStart(2, '0');
    const msStr = String(ms).padStart(2, '0');
    display.textContent = `${hrsStr}:${minsStr}:${secsStr}:${msStr}`;
}
// Start button logic
startBtn.addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = window.setInterval(() => {
            totalMS += 10;
            updateDisplay();
        }, 10);
    }
});
// Pause button logic
pauseBtn.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
});
// Reset button logic
resetBtn.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
    totalMS = 0;
    updateDisplay();
});
