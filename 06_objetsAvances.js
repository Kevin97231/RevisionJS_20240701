const book1 = {
  title: "The Great Gatsby",
  author: "F.Scott Fitzgerald",
};
const book2 = {
  title: "The GeeksforGeeks",
  author: "Geek",
};

const library = {
  name: "My library",
  books: [book1, book2],

  // ajouter des livres
  addBook: function (book) {
    this.books.push(book);
  },

  // Afficher les livres
  displayBooks: function () {
    console.log(
      "________________________________________________________________"
    );
    this.books.forEach((book, index) => {
      console.log(`${index}: title: ${book.title}, author: ${book.author}`);
    });
  },
};

const book3 = {
  title: "2023",
  author: "George Orwell",
};

library.displayBooks();

library.addBook(book3);

library.displayBooks();

// ________________________________________________________________________

function Player(name, age) {
  this.name = name;
  this.age = age;
}

const player1 = new Player("Kumar", 31);
const player2 = new Player("Bob", 29);

const team = {
  name: "Red team",
  players: [player1, player2],

  addPlayer: function (player) {
    this.players.push(player);
  },

  displayTeam: function () {
    console.log(
      "________________________________________________________________"
    );
    this.players.forEach((player, index) => {
      console.log(`player${index} : ${player.name}`);
    });
  },
};

// Add player3
const player3 = new Player("Raj", 32);

team.displayTeam();
team.addPlayer(player3);
team.displayTeam();

//  ________________________ Héritage ________________________

class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return "I have a " + this.name;
  }
}

class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());
console.log(myCar.present());
console.log(myCar.name);

// Encapsulation

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.name = name;

    // Si je n'écris pas 'this.#age' avec le '#', je passe par le setter pour
    // mettre à jour ma valeur age
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge > 0 && newAge < 99 && typeof newAge === "number") {
      this.#age = newAge;
    } else {
      console.error(
        "l'age doit etre compris entre 0 et 99 ans et doit être un valeur de type 'number'"
      );
    }
  }

  hello() {
    return `Hello, my name is ${this.#name}. I'm ${this.#age} yo`;
  }
}

class Ninja extends Person {
  #speciality;

  constructor(name, age, speciality) {
    super(name, age);
    this.#speciality = speciality;
  }

  get speciality() {
    return this.#speciality;
  }

  hello() {
    return `Hello, my name is ${this.name}. I'm ${this.age} and my speciality is ${this.speciality}`;
  }
}

const user1 = new Person("Alice", 25);

// console.log("name -> ", user1.name);

// user1.name = "Alicia";
// console.log(user1.name);

// user1.age = "105";
// console.log(user1.age);

console.log(user1.hello());
const ninja = new Ninja("Bruce", 22, "Karate");

console.log(ninja.hello());
