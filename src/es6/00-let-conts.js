/*-- trabajando con var--*/

//declarar   -   asignar variable con var
var lastName = "david";
//reasignar la variable lastName
lastName = "oscar";
//resultado
console.log(lastName);

/* trabajando con let --*/

//declarar -  asignar
let fruit = "Apple";
//reasignar la variable fruit
fruit = "kiwi";
//resultado
console.log(fruit);

/* trabajando con const --*/

//declarar -  asignar
const animal = "Dog";
//reasignar la variable animal
animal = "cat";
//resultado = error no se puede reasignar una variable cuando de declaran con const
console.log(animal);

/* scope java script*/

/**/
const fruits = () => {
  if (true) {
    // function scope podemos ingresar a esta varible dentro de la funcion con var
    var fruit1 = "Apple";
    //block scope con let solo podemos acceder a la variable en el bloque
    let fruit2 = "kiwi";
    //block scope con const solo podemos acceder a la variable en el bloque
    const fruit3 = "banana";
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();
