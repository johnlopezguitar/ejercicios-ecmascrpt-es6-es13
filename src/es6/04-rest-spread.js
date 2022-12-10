/*desestructuracion*/

//rest spread

/* arrays destructuring*/

let fruits = ["Apple", "banana"];

//destructuring
let [a, b] = fruits;

console.log(a, b);
console.log(a, fruits[1]);

/*Object destructuring*/

let user = {
  username: "John",
  age: 34,
};

//destructuring
let { username, age } = user;
console.log(username, age);
console.log(user.username, user.age);

// operador de propagacion spread operator

let person = { name: "john", age: 24 };
let country = "colombia";

// unir variables aun objeto con spread operator
let data = { id: 1, ...person, country };
console.log(data);

//rest opertor

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);

  return num + values[0];
}
sum(1, 1, 2, 3);

/* ejemplo practio de Sprea Operator*/
function solution(json1, json2) {
  json1 = json1 || {
    name: "Mr. Michi",
    food: "Pescado",
  };

  json2 = json2 || {
    age: 12,
    color: "Blanco",
  };
  let reserva = { ...json1, ...json2 };
  console.log(reserva);
}

solution();
