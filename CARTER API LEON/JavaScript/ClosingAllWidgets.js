function CloseWidgets() {
  if ((document.getElementById("githubWidget").style.display = "block")) {
    document.getElementById("githubWidget").style.display = "none";
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("GITHUBWIDGET").set({
      GITHUBWIDGET: false,
    });
  }
  //////////
  if ((document.getElementById("whosProfile").style.display = "block")) {
    document.getElementById("whosProfile").style.display = "none";
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("WHOSPROFILE").set({
      WHOSPROFILE: false,
    });
  }
  //////////
  if ((document.getElementById("remindersWidget").style.display = "block")) {
    document.getElementById("remindersWidget").style.display = "none";
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("REMINDERSWIDGET").set({
      REMINDERSWIDGET: false,
    });
  }
  //////////
  if ((document.getElementById("youtubeResults").style.display = "block")) {
    document.getElementById("youtubeResults").style.display = "none";
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("YOUTUBEWIDGET").set({
      YOUTUBEWIDGET: false,
    });
  }
}
