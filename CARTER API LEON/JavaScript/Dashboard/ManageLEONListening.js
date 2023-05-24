function turnOnListen() {
  var element = document.getElementById("TURNON");
  element.style.backgroundColor = "#00c968";
  element.style.color = "#ffffff";
  var element = document.getElementById("TURNOFF");
  element.style.backgroundColor = "#00741b00";
  element.style.color = "#ffffff";
  var database = firebase.database();
  var ref = database.ref("Listening");
  ref.set({
    listen: "on",
  });
}

function turnOffListen() {
  var element = document.getElementById("TURNOFF");
  element.style.backgroundColor = "#c90000";
  element.style.color = "#ffffff";
  var element2 = document.getElementById("TURNON");
  element2.style.backgroundColor = "#00741b00";
  element2.style.color = "#ffffff";
  var database = firebase.database();
  var ref = database.ref("Listening");
  ref.set({
    listen: "off",
  });
}

function CheckIfItsOn() {
  var database = firebase.database();
  var ref = database.ref("Listening");
  ref.on("value", function (snapshot) {
    var data = snapshot.val();
    if (data.listen == "on") {
      var element = document.getElementById("TURNON");
      element.style.backgroundColor = "#00c968";
      element.style.color = "#ffffff";
      var element = document.getElementById("TURNOFF");
      element.style.backgroundColor = "#00741b00";
      element.style.color = "#ffffff";
    } else {
      var element = document.getElementById("TURNOFF");
      element.style.backgroundColor = "#c90000";
      element.style.color = "#ffffff";
      var element2 = document.getElementById("TURNON");
      element2.style.backgroundColor = "#00741b00";
      element2.style.color = "#ffffff";
    }
  });
}

window.onload = CheckIfItsOn();
