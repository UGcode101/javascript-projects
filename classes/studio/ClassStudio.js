class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    const avg = sum / this.scores.length;
    return Math.round(avg * 10) / 10;
  }

  status() {
    let avgScore = this.average();
    if (avgScore >= 90) {
      return "Accepted";
    } else if (avgScore >= 80) {
      return "Reserve";
    } else if (avgScore >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

function calculateTestsForStatusUpgrade(candidate, upgradeStatus) {
  let testsAdded = 0;
  while (candidate.status() !== upgradeStatus) {
    candidate.addScore(100);
    testsAdded++;
    if (candidate.status() === upgradeStatus) break;
  }
  return testsAdded;
}

let testsForReserve = calculateTestsForStatusUpgrade(gladGator, "Reserve");
let gladGatorReserveStatus = gladGator.status();
let testsForAccepted = calculateTestsForStatusUpgrade(gladGator, "Accepted");

console.log(`Tests needed for Glad Gator to reach Reserve: ${testsForReserve}`);
console.log(
  `Additional tests needed for Glad Gator to reach Accepted: ${testsForAccepted}`
);

[bubbaBear, merryMaltese, gladGator].forEach((candidate) => {
  console.log(
    `${
      candidate.name
    } earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`
  );
});
