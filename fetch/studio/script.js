window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((astronauts) => {
      const container = document.getElementById("container");
      let astronautsHTML = "";
      for (let i = 0; i < astronauts.length; i++) {
        const astronaut = astronauts[i];
        astronautsHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${
                              astronaut.active
                                ? '<span style="color: green;">Yes</span>'
                                : "No"
                            }</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
            `;
      }
      container.innerHTML = astronautsHTML;
    });
});
