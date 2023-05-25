function arrivedAtHome() {
  let myAudio = new Audio();
  myAudio.src =
    "https://api.carterapi.com/v0/speak/2IKy96qCv45OE2UlwZHMPemOAedYqa9u/" +
    "Opening your necessary files and your work space";
  document.getElementById("output").innerHTML =
    "Opening your nessessary files and your work space";
  myAudio.play();
  myAudio.onended = () => (document.getElementById("output").innerHTML = "");

  // wait 1 second
  setTimeout(() => {
    let myAudio = new Audio();
    myAudio.src =
      "https://api.carterapi.com/v0/speak/2IKy96qCv45OE2UlwZHMPemOAedYqa9u/" +
      "Doing systems check now";
    document.getElementById("output").innerHTML = "Doing systems check now";
    myAudio.play();
    myAudio.onended = () => (document.getElementById("output").innerHTML = "");
    // wait 3 seconds
    var audio = new Audio("SoundEffects/home.mp3");
    audio.volume = 0.5;
    audio.play();
    setTimeout(() => {
      SystemCheck();
    }, 3500);
  }, 4000);
}
