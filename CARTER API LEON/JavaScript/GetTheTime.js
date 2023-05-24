function GetTheCurrentTime() {
  const date = new Date();
  //het the hour
  let hour = date.getHours();
  //get the minutes
  let minutes = date.getMinutes();
  // get am or pm
  let amOrPm = hour >= 12 ? "pm" : "am";
  // convert the hour from 24 hour to 12 hour
  hour = hour % 12 || 12;
  // add a 0 to the minutes if the minutes are less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // get the time
  let time = `${hour}:${minutes} ${amOrPm}`;

  let myAudio = new Audio();
  myAudio.src = `https://api.carterapi.com/v0/speak/2IKy96qCv45OE2UlwZHMPemOAedYqa9u/ ${time}`;
  document.getElementById("output").innerHTML = time;
  myAudio.play();
  myAudio.onended = () => (document.getElementById("output").innerHTML = "");
}
