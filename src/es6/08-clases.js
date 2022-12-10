//declarando  clase
class User {}

//instancia de una clase
//const newUser = new User();

class user {
  //metodos
  greeting() {
    return "hello";
  }
}

const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
  //constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "hello";
  }
}

const david = new user();

//this
class user {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return "hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("ana");
console.log(ana.greeting());

//setterd getters

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // metodos
  speak() {
    return "hellos";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user("david", 15);
console.log(bebeloper1.uAge);

console.log((bebeloper1.uAge = 20));
