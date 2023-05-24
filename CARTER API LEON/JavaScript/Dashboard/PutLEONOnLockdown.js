function lockDown() {
  // save it to the realtime database
  var db = firebase.database();
  var ref = db.ref("LEONLOCKDOWN");
  ref.set({
    LEONLOCKDOWN: true,
  });
  document.getElementById("alertLockDown").style.display = "block";
}

function Unlock() {
  // prompt for a password
  var password = prompt("Please enter the password");
  if (password == "leon") {
    var db = firebase.database();
    var ref = db.ref("LEONLOCKDOWN");
    ref.set({
      LEONLOCKDOWN: false,
    });
    CheckIfWeAreOnLockdown();
  } else {
    alert("Wrong Password");
  }
}
