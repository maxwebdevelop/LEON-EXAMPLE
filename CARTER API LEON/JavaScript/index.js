const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const wakeUpWord = "leon";

recognition.addEventListener("start", () => {
  console.log("Voice is activated, you can talk to the microphone");
});

recognition.addEventListener("result", ({ results, resultIndex }) => {
  const [{ transcript }] = results[resultIndex];
  if (transcript.toLowerCase().includes(wakeUpWord)) {
    console.log("Wake up word detected");
    sendQueryToApi(transcript);
    console.log(transcript);
  }
});

const audio = new Audio();
audio.addEventListener("ended", () => {
  recognition.start();
  document.getElementById("output").innerHTML = "";
});

const sendQueryToApi = (transcript) => {
  if (transcript.toLowerCase().includes(wakeUpWord)) {
    document.getElementById("circleOuter").style.display = "block";
    document.getElementById("circleOuter1").style.display = "block";
    fetch("https://api.carterapi.com/v0/chat", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "2IKy96qCv45OE2UlwZHMPemOAedYqa9u",
        query: transcript.replace(wakeUpWord, "").trim(),
        uuid: "user-id-123",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.triggers);
        document.getElementById("output").innerHTML = data.output.text;
        audio.src = data.output.voice;
        audio.play();
        if (data.triggers[0].type === "Weather Request") {
          GetCurrentWeather();
        }
        if (data.triggers[0].type === "Knowlage") {
          console.log(data.input);
          GetTheResults(data.input);
        } else if (data.triggers[0].type === "SetAReminder") {
          console.log(data.input);
          setAReminderToTheFirebase(data.input);
          checkForReminders();
          document.getElementById("noReminders").style.display = "none";
        } else if (data.triggers[0].type === "DeleteMyReminders") {
          console.log(data.input);
          deleteMyReminder(data.input);
          setTimeout(() => {
            location.reload();
          }, 1500);
        } else if (data.triggers[0].type === "ImportantInformation") {
          setTimeout(() => {
            SystemCheck();
          }, 3000);
        } else if (data.triggers[0].type === "RemindersQuestion") {
          setTimeout(() => {
            CheckForReminders();
          }, 2500);
        } else if (data.triggers[0].type === "SetATimer") {
          setTimeout(() => {
            setTimer(data.input);
          }, 2500);
        } else if (data.triggers[0].type === "IAmHome") {
          setTimeout(() => {
            arrivedAtHome();
          }, 2500);
        } else if (data.triggers[0].type === "OpenAplications") {
          OpenApplications(data.input);
        } else if (data.triggers[0].type === "GithubInformation") {
          OpenGithub();
        } else if (data.triggers[0].type === "CloseWidgets") {
          CloseWidgets();
        } else if (data.triggers[0].type === "ShowMyReminders") {
          setTimeout(() => {
            ShowingReminders();
          }, 2000);
        } else if (data.triggers[0].type === "Youtube") {
          setTimeout(() => {
            DisplayYoutubeResults(data.input);
          }, 2000);
        }
      });
  }
};

// on end clear the output
audio.onended = () => (
  (document.getElementById("output").innerHTML = ""),
  (document.getElementById("circleOuter").style.display = "none"),
  (document.getElementById("circleOuter1").style.display = "none")
);
recognition.onend = () => recognition.start();
recognition.start();
