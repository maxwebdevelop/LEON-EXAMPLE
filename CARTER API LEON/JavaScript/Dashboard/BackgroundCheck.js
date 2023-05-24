function BackgroundCheckDashBoard() {
  // 7pm - 4am
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours >= 18 || hours <= 4) {
    // change the background picture to blackprint.jpg
    document.body.style.backgroundImage = "url('Pictures/blackPrint.jpeg')";
    // fit
    document.body.style.backgroundSize = "cover";
    // center
    document.body.style.backgroundPosition = "center";
    // make it darker
    document.body.style.filter = "brightness(50%)";
  } else {
    // change the background picture to blackprint.jpg
    document.body.style.backgroundImage = "url('Pictures/blue.jpeg')";
    // center
    document.body.style.backgroundPosition = "center";
    // add gray filter to the background
    document.body.style.filter = "grayscale(0%)";
  }
}

window.onload = BackgroundCheckDashBoard();
setInterval(BackgroundCheckDashBoard, 1000);
//
//
//
//
//
function checkForBattery() {
  navigator.getBattery().then(function (battery) {
    document.getElementById("BatteryLife").innerHTML =
      Math.round(battery.level * 100) + "%";
    // if battery life is more then 50 %
    if (battery.level > 0.5) {
      document.getElementById("BatteryLife").style.color = "green";
    }
    // if battery life is less then 50 %
    if (battery.level < 0.5) {
      document.getElementById("BatteryLife").style.color = "orange";
      // blink animation
      document.getElementById("BatteryLife").style.animation =
        "blink 1.5s linear infinite";
    }
    // if battery life is less then 20 %
    if (battery.level < 0.2) {
      document.getElementById("BatteryLife").style.color = "red";
      // blink animation
      document.getElementById("BatteryLife").style.animation =
        "blink 1s linear infinite";
    }
    // if less then 10
    if (battery.level < 0.1) {
      document.getElementById("BatteryLife").style.color = "red";
      // blink animation
      document.getElementById("BatteryLife").style.animation =
        "blink 0.5s linear infinite";
    }
  });
}

window.onload = checkForBattery();
setInterval(checkForBattery, 1000);
//
//
//
//
//
function checkForTheLastSystemCheck() {
  var firebaseRef = firebase.database().ref("SYSTEMCHECK");
  firebaseRef.on("value", function (datasnapshot) {
    // if there is no data in the database
    if (datasnapshot.val() == null) {
      document.getElementById("displaySystemCheck").innerHTML =
        "There is no data in the database";
    }
    if (datasnapshot.val() != null) {
      //get the date and the time value
      var date = datasnapshot.val().date;
      var time = datasnapshot.val().time;
      // display the date and the time
      document.getElementById("displaySystemCheck").innerHTML =
        "Last system check: " + date + " " + time;
    }
  });
}

window.onload = checkForTheLastSystemCheck();
