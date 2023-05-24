// DISPLAY THE CURRENT WEATHER INSIDE A WIDGET
function showCurrentWeather() {
  // fetch the weather
  getCurrentWeather().then((weather) => {
    // get the weather description
    const weatherDescription = weather.weather[0].description;
    // get the temperature
    const temperature = weather.main.temp;
    // get the city name
    const city = weather.name;
    // get the country name
    const country = weather.sys.country;
    // get the weather widget
    const weatherWidgetHeader = document.getElementById("weatherHeader");
    weatherWidgetHeader.innerHTML = "Weather in" + city;
    const weatherWidgetBody = document.getElementById("weatherBody");
    weatherWidgetBody.innerHTML = `${weatherDescription} and ${temperature}°C`;
  });
}

window.onload = function () {
  showCurrentWeather();
};
