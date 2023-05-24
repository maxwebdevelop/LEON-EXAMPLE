function GetTheResults(data) {
  const apiUrl =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const apiKey = "*****";
  const temperature = 0.5;
  const maxTokens = 100;
  const prompt = data;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      temperature: temperature,
      max_tokens: maxTokens,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // speak
      console.log(data);
      console.log(data.choices[0].text);
      let myAudio = new Audio();
      myAudio.src = `***** ${data.choices[0].text}`;
      document.getElementById("output").innerHTML = data.choices[0].text;
      myAudio.play();
      myAudio.onended = () =>
        (document.getElementById("output").innerHTML = "");
    });
}
