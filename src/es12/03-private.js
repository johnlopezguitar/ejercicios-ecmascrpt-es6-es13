// clases y metodos privados  privadas

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // metodos

  //speak metodo es privado se coloca almuadilla
  #speak() {
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
