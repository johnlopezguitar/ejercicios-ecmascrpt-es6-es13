async function* anotherGnerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const ather = anotherGnerator();

ather.next().then((response) => console.log(response.value));
ather.next().then((response) => console.log(response.value));
ather.next().then((response) => console.log(response.value));
console.log("hello");

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(["Oscar", "David", "ana"]);
console.log("after");
