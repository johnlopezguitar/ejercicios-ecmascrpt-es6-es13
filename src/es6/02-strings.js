/* template literal nos permite concatenar 
string de una forma mas amigable*/

let hello = "hello";
let world = "word";

//concatenar antes del ecmascript 6

let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase);

// concatenar con template literalde  es6

let epicPhrase2 = `${hello} ${world}!`;

// Multi-line strings  = multilineas

// multilinea antes de es6
let lorem = "esto es un string \n " + "esto es otra linea";

//multilinea con template literal es6
let lorem2 = ` esta es una frase epica
 la continuacion de esta frase epica`;

console.log(lorem);
console.log(lorem2);
