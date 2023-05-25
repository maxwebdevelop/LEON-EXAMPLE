function BackgroundWeatherDisplay() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours >= 5 && hours <= 7) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat2 = position.coords.latitude;
      let lon2 = position.coords.longitude;
      let apiKey2 =
        "https://api.carterapi.com/v0/speak/2IKy96qCv45OE2UlwZHMPemOAedYqa9u/";
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat2}&lon=${lon2}&appid=${apiKey2}&units=metric`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // get the city name
          let city = data.name;
          let weatherDescription = data.weather[0].description;
          let temperature = data.main.temp;
          temperature = Math.floor(temperature * (9 / 5) + 32);
          let humidity = data.main.humidity;
          let windSpeed = data.wind.speed;
          let windDirection = data.wind.deg;
          document.getElementById("weatherHeader").innerHTML = "WEATHER";
          document.getElementById("weatherBody").innerHTML =
            "<li>Weather: " +
            weatherDescription +
            "</li>" +
            "<li>Temperature: " +
            temperature +
            "°F</li>" +
            "<li>Humidity: " +
            humidity +
            "%</li>" +
            "<li>Wind Speed: " +
            windSpeed +
            "m/s</li>" +
            "<li>Wind Direction: " +
            windDirection +
            "°</li>";
          let outfitSuggestion = "";
          switch (weatherDescription) {
            case "rain":
              outfitSuggestion = "You should wear a raincoat today.";
              break;
            case "clear sky":
              outfitSuggestion = "You should wear something light today.";
              break;
            case "broken clouds":
              outfitSuggestion = "You should wear something light today.";
              break;
            case "scattered clouds":
              outfitSuggestion = "You should wear something light today.";
              break;
            case "few clouds":
              outfitSuggestion = "You should wear something light today.";
              break;
            case "overcast clouds":
              outfitSuggestion = "You should wear something light today.";
              break;
            case "shower rain":
              outfitSuggestion = "You should wear a raincoat today.";
              break;
            case "thunderstorm":
              outfitSuggestion = "You should wear a raincoat today.";
              break;
            case "snow":
              outfitSuggestion = "You should wear a something warm today.";
              break;
            case "mist":
              outfitSuggestion = "You should wear a raincoat today.";
              break;
            default:
              outfitSuggestion = "Wear appropriate clothing for the weather.";
          }
          document.getElementById("DressOutfit").innerHTML = outfitSuggestion;
        });
    });
  }
}
window.onload = BackgroundWeatherDisplay();
setInterval(BackgroundWeatherDisplay, 300000);
//
//
//
//
//
function checkForReminders() {
  firebase
    .database()
    .ref("REMINDERS")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("remindersWidget").style.display = "block";
        var reminders = snapshot.val();
        var remindersList = document.getElementById("allReminders");
        remindersList.innerHTML = "";
        for (var reminder in reminders) {
          var li = document.createElement("li");
          li.innerHTML = reminders[reminder];
          remindersList.appendChild(li);
        }
        return;
      }
      displayNoRemindersMessage();
    });
}

function displayNoRemindersMessage() {
  document.getElementById("remindersWidget").style.display = "none";
  document.getElementById("noRemindersSection").style.display = "block";
  document.getElementById("noReminders").style.color = "gray";
  document.getElementById("noReminders").innerHTML = "No reminders found";
}

window.addEventListener("load", checkForReminders);

setInterval(checkForReminders, 600000);
//
//
//
//
//
//
//
//
//
//
function CheckForReminders() {
  // check if ther are any reminders
  firebase
    .database()
    .ref("REMINDERS")
    .once("value")
    .then((snapshot) => {
      // if there are reminders
      if (snapshot.exists()) {
        document.getElementById("remindersWidget").style.display = "block";
        var firebaseRef = firebase.database().ref();
        firebaseRef.child("REMINDERSWIDGET").set({
          REMINDERSWIDGET: true,
        });
        let myAudio = new Audio();
        myAudio.src = "*****" + "Yes it looks like you have reminders set";
        myAudio.play();
        document.getElementById("output").innerHTML =
          "Yes it looks like you have reminders set";
        myAudio.onended = () =>
          (document.getElementById("output").innerHTML = "");
      } else {
        let myAudio = new Audio();
        myAudio.src =
          "*****" + "No it looks like you do not have any reminders set";
        myAudio.play();
        document.getElementById("output").innerHTML =
          "No it looks like you do not have any reminders set";
        myAudio.onended = () =>
          (document.getElementById("output").innerHTML = "");
      }
    });
}
//
//
//
//
//
function BackgroundCheck() {
  // 7pm - 4am
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours >= 18 || hours <= 4) {
    // change the background picture to blackprint.jpg
    document.body.style.backgroundImage = "url('Pictures/blackprint.jpeg')";
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

window.onload = BackgroundCheck();
setInterval(BackgroundCheck, 1000);
//
//
//
//
//
function checkPassword() {
  if (window.innerWidth <= 600) {
    const password = prompt("Please enter your password", "");
    if (password === "******") {
      firebase.database().ref("PASSWORD").set({
        password: true,
      });
    } else {
      alert("Wrong password");
    }
  }
}

function checkFirebase() {
  firebase
    .database()
    .ref("PASSWORD")
    .once("value")
    .then((snapshot) => {
      if (!snapshot.exists() || !snapshot.val().password) {
        checkPassword();
      }
    });
}

window.onload = checkFirebase();

setInterval(() => {
  firebase.database().ref("PASSWORD").set({
    password: false,
  });
}, 7200000);
//
//
//
//
//
function checkForInformationToDisplayOnLoad() {
  firebase
    .database()
    .ref("GITHUBWIDGET")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().GITHUBWIDGET === true) {
          OpenGithub();
        } else {
          document.getElementById("githubWidget").style.display = "none";
        }
      }
    })
    .then(() => {
      firebase
        .database()
        .ref("REMINDERSWIDGET")
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.val().REMINDERSWIDGET === true) {
              document.getElementById("remindersWidget").style.display =
                "block";
            } else {
              document.getElementById("remindersWidget").style.display = "none";
            }
          }
        });
    });
}

window.onload = checkForInformationToDisplayOnLoad();
///
//
//
//
//
// CHeck if leon is under a lockDown
function checkForLockDownIndex() {
  var db = firebase.database();
  var ref = db.ref("LEONLOCKDOWN");
  ref.on("value", function (snapshot) {
    if (snapshot.val().LEONLOCKDOWN === true) {
      document.getElementById("lockdownIsActive").style.display = "block";
      // check if remindersWidget is bloc
      if (
        document.getElementById("remindersWidget").style.display === "block"
      ) {
        document.getElementById("remindersWidget").style.display = "none";
      }
      // check if theres any githubWidget
      if (document.getElementById("githubWidget").style.display === "block") {
        document.getElementById("githubWidget").style.display = "none";
      }
    } else {
      document.getElementById("lockdownIsActive").style.display = "none";
    }
  });
}

window.onload = checkForLockDownIndex();
