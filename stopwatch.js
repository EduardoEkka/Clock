
var countdown;
var totalSeconds = 0;
var second = 0;
var minute = 0;
var hour = 0;

const hour1 = document.getElementById("hour");
const minute1 = document.getElementById("minute");
const second1 = document.getElementById("second");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function startStopwatch() {
    second++;
    totalSeconds++;

    hour1.innerHTML = hour;
    minute1.innerHTML = minute;
    second1.innerHTML = second;

    if (second == 59) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
}

startButton.addEventListener("click", function () {
    countdown = setInterval(startStopwatch, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
});

stopButton.addEventListener("click", function () {
    clearInterval(countdown);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
});

resetButton.addEventListener("click", function () {
    clearInterval(countdown);
    totalSeconds = 0;
    second = 0;
    minute = 0;
    hour = 0;
    hour1.innerHTML = "0";
    minute1.innerHTML = "0";
    second1.innerHTML = "0";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});