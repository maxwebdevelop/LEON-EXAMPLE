// This will display the important information depending on a time of the day
function DisplayImportantInformation1() {
  // DISPLAY THE TIME
  var time = new Date().toLocaleTimeString();
  var importantInformation = time;
  document.getElementById("time").innerHTML = importantInformation;
}

setInterval(DisplayImportantInformation1, 100);

function DisplayImportantInformation2() {
  // DISPLAY THE DATE
  var date = new Date().toLocaleDateString();
  var importantInformation = date;
  document.getElementById("date").innerHTML = importantInformation;
}

setInterval(DisplayImportantInformation2, 100);
