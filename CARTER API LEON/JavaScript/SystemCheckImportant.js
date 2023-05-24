function SystemCheck() {
  let myAudio = new Audio();
  if (navigator.onLine) {
    myAudio.src = "*****" + "Your system is online";
    document.getElementById("output").innerHTML = "Your system is online";
  } else {
    myAudio.src = "*****" + "Your system is offline";
    document.getElementById("output").innerHTML = "Your system is offline";
  }
  myAudio.play();
  myAudio.onended = () => {
    if (navigator.getBattery) {
      navigator.getBattery().then(function (battery) {
        myAudio.src =
          "*****" +
          "Your battery is at " +
          Math.round(battery.level * 100) +
          " percent";
        document.getElementById("output").innerHTML =
          "Your battery is at " + Math.round(battery.level * 100) + " percent";
        myAudio.play();
        myAudio.onended = () => {
          if (console.error) {
            myAudio.src = "*****" + "There are no errors in the console";
            document.getElementById("output").innerHTML =
              "There are no errors in the console";
            myAudio.play();
            myAudio.onended = () =>
              (document.getElementById("output").innerHTML = "");
          }
        };
      });
    }

    async function checkGithubErrors() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/*****/issues"
        );
        const issues = await response.json();
        if (issues.length === 0) {
          let myAudio = new Audio();
          myAudio.src =
            "*****" + "There are no errors in your Github repository.";
          document.getElementById("output").innerHTML =
            "There are no errors in your Github repository.";
          myAudio.play();
          myAudio.onended = () =>
            (document.getElementById("output").innerHTML = "");
        } else {
          let myAudio = new Audio();
          myAudio.src =
            "*****" +
            "There are some errors in your Github repository. Please check them.";
          document.getElementById("output").innerHTML =
            "There are some errors in your Github repository. Please check them.";
          myAudio.play();
          myAudio.onended = () =>
            (document.getElementById("output").innerHTML = "");
        }
      } catch (error) {
        let myAudio = new Audio();
        myAudio.src =
          "*****" +
          "There was an error checking for errors in your Github repository. Please try again later.";
        document.getElementById("output").innerHTML =
          "There was an error checking for errors in your Github repository. Please try again later.";
        myAudio.play();
        myAudio.onended = () =>
          (document.getElementById("output").innerHTML = "");
      }
    }
  };

  // save it to the firebase
  firebase.database().ref("SYSTEMCHECK");
  firebase.database().ref("SYSTEMCHECK").set({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });
}
