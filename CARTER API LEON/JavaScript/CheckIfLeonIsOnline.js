// THIS WILL CHECK IF LEON IS ONLINE OR NOT, IF NOT IT WILL CHANGE THE RING SIZE OF LEON TO RED
function CheckOnlineStatus() {
  if (navigator.onLine) {
    // Change the filter drop shadow to red
    document.getElementById("circle1").style.boxShadow = "#2f524e";
  } else {
    document.getElementById("circle2").style.border = "1px solid red";
  }
}

window.onload = CheckOnlineStatus();
setInterval(CheckOnlineStatus, 1000);
