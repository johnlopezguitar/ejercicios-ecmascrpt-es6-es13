const string = "hello";
//para gregar caracteres a un string desde el comienzo
console.log(string.padStart(7, "hi"));

console.log(string.padEnd(10, "_ _ _"));

//ejemplo
// taiing commas
const array = [24, 34, 25, 24, , , 28];

console.log(array);
console.log(array.length);
