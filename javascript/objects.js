//  Objects
//  When an object has a function pair it is called a Method

let person = {
  name: 'Josh',
  age: 39,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  // Function pair using ES5 standard using arrow assignment
  // Using this keyword to call a variable inside an object
  // Use the tiddle `` when using ${} call.  not '' apostrophe
  sayHello: () => {
    return `Hello, my name is ${this.name}`;
  },
  // Function pair using ES6 standard
  sayGoodbye() {
    return 'Goodbye!';
  },
  // Another way to create Function pair
  sayWhat: function () {
    return 'What?';
  }
};

// Calling the variable with bracket notation
console.log(person['name']);
console.log(person['age']);
// Calling the function pair
console.log(person.sayHello());

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  // Can select the variable inside an object using ''
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

// Can add variables to objects using dot or bracket notation
person.hobbies = ['Guitar', 'Video games'];
person['hobbies'] = ['Guitar', 'Video games'];
// Values can be reassigned for objects using the same format
person.hobbies = ['Guitar'];
person['hobbies'] = ['Guitar'];

// You can add a copy a function to another objects
let friend = {
  name: 'Joe';
}
friend.sayHello = person.sayHello;

//  Using setters and getters
//  Using open objects like above allows values to be change by anyone
//  It is recommended to use setters and getters for all Objects

let people = {
  // The _ before the variable makes them need a set/get
  _name = 'Joshua',
  _age = 39,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    } else {
      // Can use return or console.log depending on application.
      // Should have at least a return to indicate error though
      console.log(`${ageIn} is invalid imput. Must be a number`);
      return 'Invalid input';
    }
  },

  get age() {
    // Console.log is not really needed here
    console.log(`${this.name} is ${this._age} years old`)
    return this._age;
  }
}

//  Full fledged object example from Project: Meal Maker:
let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    // Getters
    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },

    // Setters
    set appetizers(newApp) {
      if (typeof newApp === 'string') {
      	this._appetizer = newApp;
    	} else {
    		return 'Invalid input';
  		}
  	},
    set mains(newMain) {
      if (typeof newMain === 'string') {
        this._mains = newMain;
      } else {
        return 'Invalid input';
      }
    },
    set desserts(newDessert) {
      if (typeof newDessert === 'string') {
        this._dessert = newDessert;
      } else {
        return 'Invalid input';
      }
    }
  },

  // Course Getter
  get courses() {
  	return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
	},

  // Functions
  addDishToCourse(courseName, dishName, dishPrice) {
  	const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
	},

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return this._courses[courseName][randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
  return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name},
The price is $${totalPrice}`;
  }
};
// Adding dishes to menu
menu.addDishToCourse('mains', 'Ham Platter', 9.99);
menu.addDishToCourse('mains', 'Turkey Dinner', 12.95);
menu.addDishToCourse('mains', 'Prime Rib', 14.55);
menu.addDishToCourse('appetizers','Garlic Bread',5.99);
menu.addDishToCourse('appetizers','Soup of the Day',4.99);
menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 8.99);
menu.addDishToCourse('desserts','Cheesecake',4.89);
menu.addDishToCourse('desserts','Apple Pie', 5.99);
menu.addDishToCourse('desserts','Chocolate Cake', 4.99);

let meal = menu.generateRandomMeal();
console.log(meal);

// Project:Team Stats Object
let team = {
  _players: [
    {firstName: "Pete",lastName: "Wheeler",age: 54},
    {firstName: "Pablo",lastName: "Sanchez",age: 31},
    {firstName: "Jose",lastName: "Canseco",age: 44}
  ],
  _games: [
    {opponent: "Bronos",teamPoints: 42, opponentPoints: 27},
    {opponent: "Astros",teamPoints: 12, opponentPoints: 15},
    {opponent: "Rangers",teamPoints: 20, opponentPoints: 17}
  ],

  //Getters
  get players() {
  	return this._players;
	},
  get games() {
  	return this._games;
	},

  // Methods
  addPlayer(firstName, lastName, age) {
    let player = {firstName: firstName,lastName: lastName,age: age};
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {opponent: opponentName,
               points: teamPoints,
               opponentPoints: opponentPoints}
    this.games.push(game);
  }
}
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team.players);

team.addGame('Raiders',7,7);
team.addGame('Redskins',14,21);
team.addGame('Padres', 21,7);

console.log(team.games);
