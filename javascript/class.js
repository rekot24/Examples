//  Media Class example with inheritance

class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) =>
                                         currentSum + rating, 0);
    return ratingsSum/this._ratings.length;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything',
                                    'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


// School class example
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(studentCount) {
    if (typeof studentCount === 'String') {
      this._numberOfStudens = studentCount;
    } else {
      return 'Invalid Input: numberOfStudents must be set to a Number.';
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents}, typically
between the ages of ${this._level}`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let ranNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[ranNum];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,
'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams',
'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball',
'Basketball', 'Volleyball', 'Track and Field']);
