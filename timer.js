
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const alarmSound = document.getElementById('alarmSound');

let timerInterval;
let totalSeconds;

function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  hourInput.value = hours;
  minuteInput.value = minutes;
  secondInput.value = seconds;
}

function startTimer() {
  totalSeconds = parseInt(hourInput.value) * 3600 + parseInt(minuteInput.value) * 60 + parseInt(secondInput.value);
  updateTimerDisplay();
  
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  
  timerInterval = setInterval(function() {
    totalSeconds--;
    if (totalSeconds < 0) {
      clearInterval(timerInterval);
    
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}


function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}


function resetTimer() {
  stopTimer();
  hourInput.value = '0';
  minuteInput.value = '0';
  secondInput.value = '0';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
document.querySelector('.hamburger-menu').addEventListener('click', function () {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
});