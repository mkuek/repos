// Elements
const pomodoroAppElement = document.getElementById("pomodoro-app");
const pomodoroCounterDisplayElement = document.getElementById(
  "pomodoroCounterDisplay"
);
const pomodoroFormElement = document.getElementsByClassName("pomorodoForm")[0];
const minuteInputElement = document.getElementById("minutesInputText");
const secondInputElement = document.getElementById("secondsInputText");
//pomodoroErrorList
const pomodoroListOfErrorsElement =
  document.getElementById("pomodoroErrorList");
const addPomodoroToListButton = document.getElementById("pomorodoForm-addBtn");
const pomodoroListElement = document.getElementById("PomodoroList");
const startOrPauseAPomodoroFromListButton = document.getElementById(
  "pomorodoForm-StartPauseBtn"
);

const timerDisplay = document.querySelector("#pomodoroCounterDisplay");
const startBtn = document.querySelector("#pomorodoForm-StartBtn");
const pauseBtn = document.querySelector("#pomorodoForm-PauseBtn");
const resetBtn = document.querySelector("#pomorodoForm-reset");
const addBtn = document.querySelector("#pomorodoForm-addBtn");

let isClockRunning = false;
//25 mins standard pomodoro
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// START
startBtn.addEventListener("click", () => {
  toggleClock();
});

// PAUSE
pauseBtn.addEventListener("click", () => {
  toggleClock();
});

// RESET
resetBtn.addEventListener("click", () => {
  toggleClock(true);
});

//ADJUST TIME
addBtn.addEventListener("click", () => {
  const minInput = document.getElementById("minutesInputText").value;

  const secInput = document.getElementById("secondsInputText").value;
  console.log(minInput + secInput);
  currentTimeLeftInSession = parseInt(minInput) * 60 + parseInt(secInput);
  console.log(currentTimeLeftInSession);
  displayCurrentTimeLeftInSession();
});

const toggleClock = (reset) => {
  if (reset) {
    // STOP THE TIMER
    stopClock();
  } else {
    if (isClockRunning === true) {
      // PAUSE THE TIMER
      clearInterval(clockTimer);
      isClockRunning = false;
    } else {
      // START THE TIMER
      isClockRunning = true;
      clockTimer = setInterval(() => {
        // decrease time left / increase time spent
        currentTimeLeftInSession--;
        displayCurrentTimeLeftInSession();
      }, 1000);
    }
  }
};

const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession;
  let result = "";
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  // add leading zeroes if it's less than 10
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time;
  }
  if (hours > 0) result += `${hours}:`;
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
  console.log(result);
  timerDisplay.innerHTML = result.toString();
};

const stopClock = () => {
  clearInterval(clockTimer);
  isClockRunning = false;
  currentTimeLeftInSession = workSessionDuration;
  displayCurrentTimeLeftInSession();
};
