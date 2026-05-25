"use strict";
// let timer: number | undefined; 
// let totalMS: number = 0;
// let running: boolean = false;
// // Get elements and cast them to specific HTML types
// const display = document.getElementById("display") as HTMLElement;
// const startBtn = document.getElementById("start") as HTMLButtonElement;
// const pauseBtn = document.getElementById("pause") as HTMLButtonElement;
// const resetBtn = document.getElementById("reset") as HTMLButtonElement;
// //  Formats the time and updates the display
// function updateDisplay(): void {
//   const hrs = Math.floor(totalMS / 3600000);
//   const mins = Math.floor((totalMS % 3600000) / 60000);
//   const secs= Math.floor((totalMS % 60000)/1000);
//   const ms = Math.floor((totalMS % 1000) / 10);
//   const hrsStr= String(hrs).padStart(2,'0');
//   const minsStr=String(mins).padStart(2,'0');
//   const secsStr=String(secs).padStart(2,'0');
//   const msStr=String(ms).padStart(2,'0');
//   display.textContent = `${hrsStr}:${minsStr}:${secsStr}:${msStr}`;
// }
// // Start button logic
// startBtn.addEventListener("click", (): void => {
//   if (!running) {
//     running = true;
//     timer = window.setInterval(() => {
//       totalMS+=10;
//       updateDisplay();
//     }, 10);
//   }
// });
// // Pause button logic
// pauseBtn.addEventListener("click", (): void => {
//   running = false;
//   clearInterval(timer);
// });
// // Reset button logic
// resetBtn.addEventListener("click", (): void => {
//   running = false;
//   clearInterval(timer);
//   totalMS = 0;
//   updateDisplay();
// });
// const lapBtn = document.getElementById("lap") as HTMLButtonElement;
// const lapsList = document.getElementById("laps-list") as HTMLUListElement;
// let lapCounter = 1;
// lapBtn.addEventListener("click", (): void => {
//     if (running) {
//         const lapTime = display.textContent; // Capture current display
//         const li = document.createElement("li");
//         // Add Lap Number and Time
//         li.innerHTML = `Lap ${lapCounter} <span>${lapTime}</span>`;
//         // Add to the top of the list
//         lapsList.prepend(li); 
//         lapCounter++;
//     }
// });
// // Also, update your Reset button logic to clear the laps:
// resetBtn.addEventListener("click", (): void => {
//     running = false;
//     clearInterval(timer);
//     totalMS = 0;
//     lapCounter = 1;      // Reset counter
//     lapsList.innerHTML = ""; // Clear list
//     updateDisplay();
// });
let timer;
let totalMS = 0;
let running = false;
let lapCounter = 1;
const display = document.getElementById("display");
const lapsList = document.getElementById("laps-list");
function updateDisplay() {
    const hrs = Math.floor(totalMS / 3600000);
    const mins = Math.floor((totalMS % 3600000) / 60000);
    const secs = Math.floor((totalMS % 60000) / 1000);
    const ms = Math.floor((totalMS % 1000) / 10);
    display.textContent =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}
// Start
document.getElementById("start")?.addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = window.setInterval(() => {
            totalMS += 10;
            updateDisplay();
        }, 10);
    }
});
// Pause
document.getElementById("pause")?.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
});
// Lap
document.getElementById("lap")?.addEventListener("click", () => {
    if (running) {
        const li = document.createElement("li");
        li.innerHTML = `Lap ${lapCounter}: <span>${display.textContent}</span>`;
        lapsList?.prepend(li);
        lapCounter++;
    }
});
// Reset
document.getElementById("reset")?.addEventListener("click", () => {
    running = false;
    clearInterval(timer);
    totalMS = 0;
    lapCounter = 1;
    if (lapsList)
        lapsList.innerHTML = "";
    updateDisplay();
});
