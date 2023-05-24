const movableTimer = document.getElementById("TimerWidget");
let posTimer = { x: 0, y: 0 };

movableTimer.addEventListener("mousedown", dragStartTimer);
movableTimer.addEventListener("touchstart", dragStartTimer);

function dragStartTimer(event) {
  const e = event.touches ? event.touches[0] : event;
  event.preventDefault();
  posTimer.x = e.clientX;
  posTimer.y = e.clientY;
  document.addEventListener("mouseup", dragEndTimer);
  document.addEventListener("touchend", dragEndTimer);
  document.addEventListener("mousemove", dragTimer);
  document.addEventListener("touchmove", dragTimer);
}

function dragTimer(event) {
  const e = event.touches ? event.touches[0] : event;
  const deltaX = posTimer.x - e.clientX;
  const deltaY = posTimer.y - e.clientY;
  posTimer.x = e.clientX;
  posTimer.y = e.clientY;
  const windowHeight = window.innerHeight - movableTimer.offsetHeight;
  const windowWidth = window.innerWidth - movableTimer.offsetWidth;
  const top = movableTimer.offsetTop - deltaY;
  const left = movableTimer.offsetLeft - deltaX;
  const topBoundary = top >= 0 && top <= windowHeight;
  const leftBoundary = left >= 0 && left <= windowWidth;
  if (topBoundary && leftBoundary) {
    movableTimer.style.top = top + "px";
    movableTimer.style.left = left + "px";
  }
}

function dragEndTimer() {
  document.removeEventListener("mouseup", dragEndTimer);
  document.removeEventListener("touchend", dragEndTimer);
  document.removeEventListener("mousemove", dragTimer);
  document.removeEventListener("touchmove", dragTimer);
}
