const consoleError = document.getElementById("whosProfile");
let pos = { x: 0, y: 0 };

consoleError.addEventListener("mousedown", dragStart);
consoleError.addEventListener("touchstart", dragStart);

function dragStart(event) {
  const e = event.touches ? event.touches[0] : event;
  event.preventDefault();
  pos.x = e.clientX;
  pos.y = e.clientY;
  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("touchend", dragEnd);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);
}

function drag(event) {
  const e = event.touches ? event.touches[0] : event;
  const deltaX = pos.x - e.clientX;
  const deltaY = pos.y - e.clientY;
  pos.x = e.clientX;
  pos.y = e.clientY;
  const windowHeight = window.innerHeight - consoleError.offsetHeight;
  const windowWidth = window.innerWidth - consoleError.offsetWidth;
  const top = consoleError.offsetTop - deltaY;
  const left = consoleError.offsetLeft - deltaX;
  const topBoundary = top >= 0 && top <= windowHeight;
  const leftBoundary = left >= 0 && left <= windowWidth;
  if (topBoundary && leftBoundary) {
    consoleError.style.top = top + "px";
    consoleError.style.left = left + "px";
  }
}

function dragEnd() {
  document.removeEventListener("mouseup", dragEnd);
  document.removeEventListener("touchend", dragEnd);
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
}
