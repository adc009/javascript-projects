//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
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
    let avg = 0;
    for (const num of this.scores) {
      avg += num;
    }
    avg = Math.round((avg / this.scores.length) * 10) / 10;
    return avg;
  }

  status() {
    let status;
    if (this.average() >= 90) {
      status = "Accepted";
    } else if (this.average() >= 80) {
      status = "Reserve";
    } else if (this.average() >= 70) {
      status = "Probationary";
    } else {
      status = "Rejected";
    }
    return status;
  }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(bubba.status());
console.log(merry.status());
console.log(glad.status());

let count = 1;
let testScore = 96;
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
while (glad.average() < 90) {
  glad.addScore(testScore);
  console.log(`Attempt # ${count}:  ${glad.status()}`);
  console.log(
    `\t${
      glad.name
    } earned an average test score of ${glad.average()}% and has a status of ${glad.status()}.`
  );
  count++;
}

console.log(
  `It will take ${
    count - 1
  } tests with a score of ${testScore} for Glad Gator to reach a status of Accepted.`
);
