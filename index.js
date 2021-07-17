//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    };
  
    addScore(score) {
      this.scores.push(score);
    };
  
    average(scores){
      let total = 0;
      for (let i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
  
      }
        total = total / this.scores.length;
        total = Math.round(total * 10) / 10;
        return total;
    };
  
    status(){
     let currentStatus = this.average();
     if (currentStatus >= 90) {
       Status = 'Accepted';
      }if (currentStatus >= 80) {
        Status = 'Reserve';
      }if (currentStatus >= 70) {
        Status = 'Probationary';
      }if (currentStatus <= 69) {
        Status = 'Rejected';
      }
      console.log(` ${name} earned an average test score of ${this.average()}% and has a status of ${this.status()}. `);
    };
    
};

let bubba = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);

bubba.addScore(83);
console.log("Bubba " + bubba.scores);
console.log("Bubba " + bubba.average());
console.log("Merry " + merry.average());
console.log("Glad " + glad.average());




// //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.