//enohced object literal

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("ava", 35, "co", 1));
