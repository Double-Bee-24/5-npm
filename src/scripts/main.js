import moment from 'moment';

const timeValue = document.getElementById('time-value');

const incrementButton = document.getElementById('increment-button');
incrementButton.addEventListener('click', () => incrementTime(timeValue));

const decrementButton = document.getElementById('decrement-button');
decrementButton.addEventListener('click', () => decrementTime(timeValue));

function incrementTime(timeValue) {
  +timeValue.innerText++;
}

function decrementTime(timeValue) {
  if (+timeValue.innerText > 0) {
    +timeValue.innerText--;
  }
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => startCountDown(timeValue, startButton, incrementButton, decrementButton));

function startCountDown(timeValue, startButton, incrementButton, decrementButton) {
  let duration = moment.duration(timeValue.innerText, 'minutes');
  incrementButton.style.display = 'none';
  decrementButton.style.display = 'none';

  if (startButton.innerText === 'Скинути') {
    startButton.innerText = 'Старт';
    timeValue.innerText = '0';
    duration = moment.duration(0, 'minutes');
    incrementButton.style.display = 'block';
    decrementButton.style.display = 'block';
  } else {
    startButton.innerText = 'Скинути';
  }

  const interval = setInterval(() => {
    if (duration.asSeconds() <= 0 || startButton.innerText === 'Старт') {
      clearInterval(interval);
      startButton.innerText = 'Старт';
      timeValue.innerText = '0';
      duration = moment.duration(0, 'minutes');
      incrementButton.style.display = 'block';
      decrementButton.style.display = 'block';
    } else {
      duration.subtract(1, 'seconds');
      const minutes = String(duration.minutes()).padStart(2, '0');
      const seconds = String(duration.seconds()).padStart(2, '0');
      timeValue.innerText = `${minutes}:${seconds}`;
    }
  }, 1000);
}

a;