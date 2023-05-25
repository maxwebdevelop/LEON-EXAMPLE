function ShowingReminders() {
  firebase
    .database()
    .ref("REMINDERS")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("remindersWidget").style.display = "block";
        var firebaseRef = firebase.database().ref();
        firebaseRef.child("REMINDERSWIDGET").set({
          REMINDERSWIDGET: true,
        });
      } else {
        document.getElementById("remindersWidget").style.display = "none";
        var firebaseRef = firebase.database().ref();
        firebaseRef.child("REMINDERSWIDGET").set({
          REMINDERSWIDGET: false,
        });
        // speak no reminders
        let myAudio = new Audio();
        myAudio.src =
          "https://api.carterapi.com/v0/speak/2IKy96qCv45OE2UlwZHMPemOAedYqa9u/" +
          "It looks like you do not have any reminders set";
        myAudio.play();
      }
    });
}
