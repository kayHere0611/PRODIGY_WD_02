export{};
let timer: number | undefined; 
let totalMS: number = 0;
let running: boolean = false;
let lapCounter: number = 1;

const display = document.getElementById("display") as HTMLElement;
const lapsList = document.getElementById("laps-list") as HTMLUListElement;

function updateDisplay(): void {
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
    if (lapsList) lapsList.innerHTML = "";
    updateDisplay();
});