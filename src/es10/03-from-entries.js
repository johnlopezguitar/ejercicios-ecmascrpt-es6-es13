//cnvertir una array a un objeto

const entries = new Map([
  ["name", "oscar"],
  ["age", 34],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
