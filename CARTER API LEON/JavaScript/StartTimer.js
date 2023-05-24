function setTimer(data) {
  const value = data;
  const time = value.split("for")[1];
  const milliseconds = convertToMilliseconds(time);

  startCountdown(milliseconds);
}

function convertToMilliseconds(time) {
  let timeInMilliseconds = 0;
  const timeValue = parseInt(time);

  if (time.includes("second")) {
    timeInMilliseconds = timeValue * 1000;
  } else if (time.includes("minute")) {
    timeInMilliseconds = timeValue * 60000;
  } else if (time.includes("hour")) {
    timeInMilliseconds = timeValue * 3600000;
  }

  return timeInMilliseconds;
}

function startCountdown(milliseconds) {
  let timer = milliseconds / 1000;
  let minutes, seconds;
  const interval = setInterval(function () {
    minutes = padTimeUnit(parseInt(timer / 60));
    seconds = padTimeUnit(parseInt(timer % 60));
    console.log(`${minutes}:${seconds}`);
    document.getElementById("TimerWidget").style.display = "block";
    document.getElementById(
      "timeCountdown"
    ).innerHTML = `${minutes}:${seconds}`;
    if (--timer < 0) {
    }

    if (minutes === "00" && seconds === "00") {
      let myAudio = new Audio();
      myAudio.src = `***** 
        Time's up!`;
      myAudio.play();
      clearInterval(interval);
      // reload
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
  }, 1000);
}

function padTimeUnit(timeUnit) {
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}
