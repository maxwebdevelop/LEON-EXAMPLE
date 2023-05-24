function setAReminderToTheFirebase(data) {
  var value = data;
  // get the words only after to
  var words = value.split(" ");
  var index = words.indexOf("to");
  var reminder = words.slice(index + 1).join(" ");
  console.log(reminder);
  firebase.database().ref("REMINDERS").push(reminder);
}
