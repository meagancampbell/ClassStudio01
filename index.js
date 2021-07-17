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
  
    average(){
    let total = 0;
      
    for (let i = 0; i < this.scores.length; i++) {
    total += this.scores[i];
  
    }
    return Math.floor(total/this.scores.length);
    return Math.floor((total/this.scores.length)*10)/10;
    };
  
    status(){
      let status = '';
        if (this.average() >= 90) {
          let status = 'Accepted';
          console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`);
        
        } else if (this.average() >= 80) {
          let status = 'Reserve';
          console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`);

        } else if (this.average() >= 70) {
          let status = 'Probationary';
          console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`);

        } else if (this.average() <= 69) {
          let status = 'Rejected';
          console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`);
        } 
         
    };

};   

let bubbaBear = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);

console.log(bubbaBear);
bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());

// //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.




//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.