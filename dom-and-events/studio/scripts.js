window.addEventListener("load", function () {
  const takeoffButton = document.getElementById("takeoff");
  const landingButton = document.getElementById("landing");
  const missionAbortButton = document.getElementById("missionAbort");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");

  let shuttleHeight = 0;

  takeoffButton.addEventListener("click", function () {
    const confirmTakeoff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (confirmTakeoff) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      shuttleHeight += 10000;
      spaceShuttleHeight.innerHTML = shuttleHeight;
    }
  });

  landingButton.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight = 0;
    spaceShuttleHeight.innerHTML = shuttleHeight;
    rocket.style.bottom = "0px"; // Reset the rocket position
  });

  missionAbortButton.addEventListener("click", function () {
    const confirmAbort = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight = 0;
      spaceShuttleHeight.innerHTML = shuttleHeight;
      rocket.style.bottom = "0px"; // Reset the rocket position
    }
  });

  document.getElementById("up").addEventListener("click", function () {
    moveRocket("up");
    shuttleHeight += 10000;
    updateShuttleHeight();
  });

  document.getElementById("down").addEventListener("click", function () {
    moveRocket("down");
    shuttleHeight = Math.max(0, shuttleHeight - 10000); // Prevent negative height
    updateShuttleHeight();
  });

  document.getElementById("right").addEventListener("click", function () {
    moveRocket("right");
  });

  document.getElementById("left").addEventListener("click", function () {
    moveRocket("left");
  });

  function moveRocket(direction) {
    let position = getComputedStyle(rocket);
    switch (direction) {
      case "up":
        rocket.style.bottom = parseInt(position.bottom) + 10 + "px";
        break;
      case "down":
        rocket.style.bottom =
          Math.max(0, parseInt(position.bottom) - 10) + "px";
        break;
      case "right":
        rocket.style.left = parseInt(position.left) + 10 + "px";
        break;
      case "left":
        rocket.style.left = Math.max(0, parseInt(position.left) - 10) + "px";
        break;
    }
  }

  function updateShuttleHeight() {
    spaceShuttleHeight.innerHTML = shuttleHeight;
  }
});
