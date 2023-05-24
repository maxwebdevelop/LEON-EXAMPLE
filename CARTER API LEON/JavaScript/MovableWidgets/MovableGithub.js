const movableGit = document.getElementById("githubWidget");
let posGit = { x: 0, y: 0 };

movableGit.addEventListener("mousedown", dragStartGit);
movableGit.addEventListener("touchstart", dragStartGit);

function dragStartGit(event) {
  const e = event.touches ? event.touches[0] : event;
  event.preventDefault();
  posTimer.x = e.clientX;
  posTimer.y = e.clientY;
  document.addEventListener("mouseup", dragEndGit);
  document.addEventListener("touchend", dragEndGit);
  document.addEventListener("mousemove", dragGit);
  document.addEventListener("touchmove", dragGit);
}

function dragGit(event) {
  const e = event.touches ? event.touches[0] : event;
  const deltaX = posTimer.x - e.clientX;
  const deltaY = posTimer.y - e.clientY;
  posTimer.x = e.clientX;
  posTimer.y = e.clientY;
  const windowHeight = window.innerHeight - movableGit.offsetHeight;
  const windowWidth = window.innerWidth - movableGit.offsetWidth;
  const top = movableGit.offsetTop - deltaY;
  const left = movableGit.offsetLeft - deltaX;
  const topBoundary = top >= 0 && top <= windowHeight;
  const leftBoundary = left >= 0 && left <= windowWidth;
  if (topBoundary && leftBoundary) {
    movableGit.style.top = top + "px";
    movableGit.style.left = left + "px";
  }
}

function dragEndGit() {
  document.removeEventListener("mouseup", dragEndGit);
  document.removeEventListener("touchend", dragEndGit);
  document.removeEventListener("mousemove", dragGit);
  document.removeEventListener("touchmove", dragGit);
}
