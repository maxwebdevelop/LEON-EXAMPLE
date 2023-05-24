function DisplayDashboardTime() {
  // DISPLAY THE TIME
  var time = new Date().toLocaleTimeString();
  var importantInformation = time;
  document.getElementById("timeDash").innerHTML = importantInformation;
  // display current day inside dateDash
  var date = new Date().toLocaleDateString();
  var importantInformation = date;
  document.getElementById("dateDash").innerHTML = importantInformation;
}
setInterval(DisplayDashboardTime, 100);
