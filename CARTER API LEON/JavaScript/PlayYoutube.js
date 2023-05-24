function DisplayYoutubeResults(data) {
  let query = data;
  // Get the sentece after "how to", ignore anything else that came bofore that
  query = query.replace("how to", "").trim();
  const API_KEY = "*****";
  const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`;

  if (!query) {
    console.log("No query");
    return;
  }
  searchYoutubeVideo();

  function searchYoutubeVideo() {
    let url = new URL(YOUTUBE_SEARCH_URL);
    let params = {
      part: "snippet",
      q: query,
      type: "video",
      key: API_KEY,
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length) {
          let videoId = data.items[0].id.videoId;
          let iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          );
          iframe.setAttribute("allowfullscreen", "");
          var youtubeContainer = document.getElementById("youtubeResults");
          youtubeContainer.style.display = "block";
          // have a headline inside resultsHeaderYoutube
          var headline = document.getElementById("resultsHeaderYoutube");
          headline.innerHTML = "Youtube Results";
          // clear the iframe
          youtubeContainer.innerHTML = "";

          youtubeContainer.appendChild(headline);
          youtubeContainer.appendChild(iframe);
        } else {
          console.log("No video found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
