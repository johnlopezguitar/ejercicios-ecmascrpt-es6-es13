const regex = /\b(Apple)+\b/g;

const fruit = "Apple kiwi Banana orenge Apple";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
