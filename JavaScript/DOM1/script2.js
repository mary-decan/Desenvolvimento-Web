let seconds = 0;
let timerId = null;
let isRunning = false;

const display = document.getElementById('timerDisplay');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    display.textContent = seconds;
}

function updateTime() {
    seconds++;
    updateDisplay();
}

function startTimer() {
    isRunning = true;
    startPauseBtn.textContent = 'Pause';
    timerId = setInterval(updateTime, 1000);
}

function pauseTimer() {
    isRunning = false;
    startPauseBtn.textContent = 'Start';
    clearInterval(timerId);
    timerId = null;
}

function handleStartPause() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function resetTimer() {
    if (isRunning) {
        pauseTimer();
    }
    
    seconds = 0;
    updateDisplay();
    startPauseBtn.textContent = 'Start';
}

startPauseBtn.addEventListener('click', handleStartPause);
resetBtn.addEventListener('click', resetTimer);
updateDisplay();