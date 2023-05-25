function displayImportantNews() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours >= 5 && hours <= 8) {
    setInterval(() => {
      displayImportantNews();
    }, 300000);
    console.log("Just ran the function");
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=d145f497889e4b729d11b61c744f1561`
    )
      .then((response) => response.json())
      .then((data) => {
        let importantNews = data.articles.slice(0, 3);
        document.getElementById("displayImportantNews").style.display = "block";
        let displayArea = document.getElementById("importantNewsBody");
        displayArea.style.display = "block";
        displayArea.innerHTML = "";

        importantNews.forEach((article) => {
          displayArea.innerHTML += `
          <li>
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </li>
        `;
        });
      })
      .catch((error) => console.error(error));
  } else {
    document.getElementById("displayImportantNews").style.display = "none";
  }
}
window.onload = displayImportantNews();
