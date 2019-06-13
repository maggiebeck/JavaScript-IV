// CODE here for your Lambda Classes

//Person Class 

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
 }
 console.log(x.name);

 class Instructor extends Person {
     constructor(attributes) {
         this.specialty = attributes.specialty;
         this.favLanguage = attributes.favLanguage;
         this.catchPhrase = attributes.catchPhrase;
     }
     demo (subject) {
         return 'Today we are learning about ${subject}.';
     }
     grade (student,subject) {
         return '${student) recieves a perfect score on ${subject}.';
     }
 }

 class Student extends Person {
     constructor(attributes) {
         this.previousBackground = attributes.previousBackground;
         this.className = attributes.className;
         this.favSubjects = attributes.favSubjects;
     }
     listsSubjects () {
         return '${this.favSubjects}.';
     }
     PRAssignment () {
         return '${this.student.name} has submitted a PR for ${subject}.';
     }
     sprintChallenge () {
         return '${this.student.name} has begun sprint challenge on ${subject}.';
     }
     
 }
 class ProjectManager extends Person {
    constructor(attributes) {
        this.gradClassName  = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode() {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
    
}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const bob = new Instructor({
    name: 'Bob',
    location: 'Hamilton',
    age: 35,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `y'all`
  });
  const sarah = new Instructor({
    name: 'Sarah',
    location: 'Midland',
    age: 29,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `what's up`
  });
  const tom  = new Student({
    name: 'Tom',
    location: 'NYC',
    age: 31,
    previousBackground: 'Marketing',
    className: 'WEB21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });
  const hannah  = new Student({
    name: 'Hannah',
    location: 'Houston',
    age: 28,
    previousBackground: 'Teaching',
    className: 'WEB21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });
  const sally  = new Student({
    name: 'Sally',
    location: 'Raleigh',
    age: 34,
    previousBackground: 'Medical Sales',
    className: 'WEB21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });
  const samantha  = new ProjectManager({
    name: 'Samantha',
    location: 'Marquette',
    age: 39,
    gradClassName: 'WEB20',
    favInstructor: 'Sarah',
  });
  const alex = new ProjectManager({
    name: 'Alex',
    location: 'Chicago',
    age: 41,
    gradClassName: 'WEB17',
    favInstructor: 'Fred',
  });
  const kyle = new ProjectManager({
    name: 'Kyle',
    location: 'Rochester',
    age: 27,
    gradClassName: 'WEB19',
    favInstructor: 'Sarah',
  });
