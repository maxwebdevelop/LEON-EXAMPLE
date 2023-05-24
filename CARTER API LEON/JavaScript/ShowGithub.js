function OpenGithub() {
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("GITHUBWIDGET").set({
    GITHUBWIDGET: true,
  });
  fetch("https://api.github.com/users/*****")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const githubName = data.login;
      const githubBio = data.bio;
      const githubFollowers = data.followers;
      const githubFollowing = data.following;
      const githubPublicRepos = data.public_repos;
      const githubLocation = data.location;
      const githubEmail = data.email;
      const githubCompany = data.company;
      const githubBlog = data.blog;
      const githubAvatar = data.avatar_url;
      const githubUrl = data.html_url;
      const synthesis = window.speechSynthesis;
      //
      //
      document.getElementById("githubWidget").style.display = "block";
      document.getElementById("githubName").innerHTML = githubName;
      document.getElementById("githubDescription").innerHTML = githubBio;
      document.getElementById("githubFollowers").innerHTML =
        "Followers: " + githubFollowers;
      document.getElementById("githubFollowing").innerHTML =
        "Following: " + githubFollowing;
    });
}
