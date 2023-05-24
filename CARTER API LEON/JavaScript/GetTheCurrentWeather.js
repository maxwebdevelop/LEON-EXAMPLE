// FETCH CURRENT WEATHER
function GetCurrentWeather() {
  // responces
  var WeatherResponces = [
    "It looks like the current weather is ",
    "The current weather is ",
    "The weather is ",
    "It looks like its ",
  ];
  navigator.geolocation.getCurrentPosition(function (position) {
    // get the latitude and longitude
    let lat2 = position.coords.latitude;
    let lon2 = position.coords.longitude;
    let apiKey2 = "*****";
    //fetch hourly forecaset
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat2}&lon=${lon2}&appid=${apiKey2}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // get the weather description
        let weatherDescription = data.weather[0].description;

        let myAudio = new Audio();
        let randomResponce =
          WeatherResponces[Math.floor(Math.random() * WeatherResponces.length)];
        myAudio.src =
          "https://api.carterapi.com/v0/speak/*****/" +
          randomResponce +
          weatherDescription;
        document.getElementById("output").innerHTML =
          randomResponce + weatherDescription;
        myAudio.play();
        myAudio.onended = () =>
          (document.getElementById("output").innerHTML = "");
      });
  });
}
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
//
//
