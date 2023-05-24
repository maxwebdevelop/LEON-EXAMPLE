// Get element to drag
const consoleErrorInf = document.getElementById("remindersWidget");

// Set initial positions
let xPosition = 0,
  yPosition = 0,
  lastXPosition = 0,
  lastYPosition = 0,
  windowHeight = window.innerHeight - consoleErrorInf.offsetHeight,
  windowWidth = window.innerWidth - consoleErrorInf.offsetWidth;

// Add event listener
consoleErrorInf.addEventListener("mousedown", startDrag);

// Function to start dragging
function startDrag(e) {
  e.preventDefault();
  // get the mouse cursor position at startup:
  lastXPosition = e.clientX;
  lastYPosition = e.clientY;
  document.addEventListener("mouseup", endDrag);
  // call a function whenever the cursor moves:
  document.addEventListener("mousemove", moveElement);
}

// Function to move element
function moveElement(e) {
  e.preventDefault();
  // calculate the new cursor position:
  xPosition = lastXPosition - e.clientX;
  yPosition = lastYPosition - e.clientY;
  lastXPosition = e.clientX;
  lastYPosition = e.clientY;
  // set the element's new position:
  let top = consoleErrorInf.offsetTop - yPosition;
  let left = consoleErrorInf.offsetLeft - xPosition;

  if (top > windowHeight) {
    top = windowHeight;
  } else if (top < 0) {
    top = 0;
  }

  if (left > windowWidth) {
    left = windowWidth;
  } else if (left < 0) {
    left = 0;
  }

  consoleErrorInf.style.top = `${top}px`;
  consoleErrorInf.style.left = `${left}px`;
}

// Function to end dragging
function endDrag() {
  // stop moving when mouse button is released:
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("mousemove", moveElement);
  //save the the posisition to the firebase
  const db = firebase.firestore();
  // check if there is a refrence to REMINDERSWIDGETMOVE
  db.collection("RemindersScreenWidgetDisplay")
    .doc("REMINDERSWIDGETMOVE")
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // if it exists update the position
        db.collection("RemindersScreenWidgetDisplay")
          .doc("REMINDERSWIDGETMOVE")
          .update({
            top: consoleErrorInf.style.top,
            left: consoleErrorInf.style.left,
          })
          .then(function () {
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      } else {
        // if it doesn't exist create one
        db.collection("RemindersScreenWidgetDisplay")
          .doc("REMINDERSWIDGETMOVE")
          .set({
            top: consoleErrorInf.style.top,
            left: consoleErrorInf.style.left,
          })
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}
