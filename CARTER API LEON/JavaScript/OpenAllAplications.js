function OpenApplications(data) {
  var value = data;
  // get the words after to
  var words = value.split(" ");
  var index = words.indexOf("open");
  var aplicationToOpen = words.slice(index + 1).join(" ");
  console.log(aplicationToOpen);
  if (aplicationToOpen === "my workspace") {
    window.open("https://www.github.com/");
  } else {
    window.open(`https://www.${aplicationToOpen}.com/`);
  }
}
