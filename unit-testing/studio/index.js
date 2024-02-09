let launchCode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],

  launchOutput: function (num) {
    let output = "";

    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      output = "LaunchCode Rocks!";
    } else if (num % 2 === 0 && num % 3 === 0) {
      output = "LaunchCode!";
    } else if (num % 3 === 0 && num % 5 === 0) {
      output = "Code Rocks!";
    } else if (num % 2 === 0 && num % 5 === 0) {
      output = "Launch Rocks!";
    } else if (num % 2 === 0) {
      output = "Launch!";
    } else if (num % 3 === 0) {
      output = "Code!";
    } else if (num % 5 === 0) {
      output = "Rocks!";
    } else {
      output = "Rutabagas! That doesn't work.";
    }

    return output;
  },
};

console.log(launchCode.launchOutput(15));
module.exports = launchCode;
