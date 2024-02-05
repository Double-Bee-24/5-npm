import moment from "moment";

function incrementTime(timeValueElement) {
  let valueToIncrease = +timeValueElement.innerText;
  valueToIncrease += 1;

  const htmlElement = timeValueElement;
  htmlElement.innerText = valueToIncrease;
}

function decrementTime(timeValueElement) {
  let valueToDecrease = +timeValueElement.innerText;

  if (valueToDecrease > 0) {
    valueToDecrease -= 1;
  }

  const htmlElement = timeValueElement;
  htmlElement.innerText = valueToDecrease;
}

// Make timer looks like its default display
function resetCountdownUI(
  startButton,
  timeValue,
  incrementButton,
  decrementButton,
) {
  const firstButton = incrementButton;
  const secondButton = decrementButton;
  const leftTime = timeValue;
  let pauseButton;

  pauseButton.innerText = "Старт";
  leftTime.innerText = "0";
  firstButton.style.display = "block";
  secondButton.style.display = "block";
}

function startCountDown(
  timeValue,
  startButton,
  incrementButton,
  decrementButton,
) {
  const duration = moment.duration(timeValue.innerText, "minutes");
  // Two buttons that will be hidden and vice versa
  const firstButton = incrementButton;
  const secondButton = decrementButton;
  const pauseButton = startButton;

  firstButton.style.display = "none";
  secondButton.style.display = "none";

  if (startButton.innerText === "Скинути") {
    resetCountdownUI(timeValue, startButton, incrementButton, decrementButton);
  } else {
    pauseButton.innerText = "Скинути";
  }

  const interval = setInterval(() => {
    if (duration.asSeconds() <= 0 || startButton.innerText === "Старт") {
      clearInterval(interval);
      resetCountdownUI(
        timeValue,
        startButton,
        incrementButton,
        decrementButton,
      );
    } else {
      duration.subtract(1, "seconds");
      const minutes = String(duration.minutes()).padStart(2, "0");
      const seconds = String(duration.seconds()).padStart(2, "0");

      const leftTime = timeValue;
      leftTime.innerText = `${minutes}:${seconds}`;
    }
  }, 1000);
}

const timeValueElement = document.getElementById("time-value");

const incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", () =>
  incrementTime(timeValueElement),
);

const decrementButton = document.getElementById("decrement-button");
decrementButton.addEventListener("click", () =>
  decrementTime(timeValueElement),
);

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () =>
  startCountDown(
    timeValueElement,
    startButton,
    incrementButton,
    decrementButton,
  ),
);
