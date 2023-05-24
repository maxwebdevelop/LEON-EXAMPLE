function deleteMyReminder(data) {
  firebase
    .database()
    .ref("REMINDERS")
    .once("value")
    .then((snapshot) => {
      // delete all reminders
      snapshot.forEach((childSnapshot) => {
        childSnapshot.ref.remove();
      });
    });
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("REMINDERSWIDGET").set({
    REMINDERSWIDGET: false,
  });
}
