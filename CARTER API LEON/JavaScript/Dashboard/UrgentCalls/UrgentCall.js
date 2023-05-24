function UrgentCall() {
  // get the date and the time
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const accountSid = "*****";
  const authToken = "*****";
  const from = "*****";
  const to = "*****";

  // Make the HTTP POST request to the Twilio API
  fetch("*****" + accountSid + "/Calls.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(accountSid + ":" + authToken),
    },
    body:
      "From=" +
      from +
      "&To=" +
      to +
      "&Url=" +
      "https://static.staticsave.com/leon/leon.xml",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  //Make the HTTP POST request to the Twilio API to send a text message
  fetch(
    "https://api.twilio.com/2010-04-01/Accounts/" +
      accountSid +
      "/Messages.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(accountSid + ":" + authToken),
      },
      body:
        "From=" +
        from +
        "&To=" +
        to +
        "&Body=" +
        // show the time remove seconds
        "Leon gave you a call to give you important information" +
        " at " +
        time,
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  //save it to the firebase.. push
  var db = firebase.database();
  var ref = db.ref("URGENTALERTS");
  ref.push({
    DATE: today,
    TIME: time,
  });
}
