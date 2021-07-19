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

console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());

  //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

  // gladGator.addScore(83);
  // gladGator.addScore(99);

  // let retestToAccepted = 0;
  // let retestToReserve = 0;

  // while (this.average() < 90){
  //   this.addScore(95);
  //   retestToAccepted +=1;
  //   console.log(`${this.name} earned an average test score of ${gladGator.average()}% and has a status of ${this.status()}`);
  // }

  // while (this.average() < 90){
  //   this.addScore(85);
  //   retestToReserve +=1;
  //   console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}`);  
  // }


  // console.log(gladGator.testsToAccepted());



  // console.log("Tests till Reserve : " + testsToReserve);
  // console.log("Tests till Accepted : " + retestToAccepted);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.