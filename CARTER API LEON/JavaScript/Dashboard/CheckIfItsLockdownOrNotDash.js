function CheckIfWeAreOnLockdown() {
  var db = firebase.database();
  var ref = db.ref("LEONLOCKDOWN");
  ref.on("value", function (snapshot) {
    if (snapshot.val().LEONLOCKDOWN === true) {
      document.getElementById("alertLockDown").style.display = "block";
      document.getElementById("lockdownButton").style.backgroundColor =
        "#ff0000";
      document.getElementById("lockdownButton").style.color = "#ffffff";
    } else {
      document.getElementById("alertLockDown").style.display = "none";
      document.getElementById("lockdownButton").style.backgroundColor =
        "#00741b00";
    }
  });
}

window.onload = CheckIfWeAreOnLockdown();
