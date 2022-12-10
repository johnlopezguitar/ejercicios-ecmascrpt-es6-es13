//parametros por defecto

// parametros por defecto antes del es6
function newUser(name, age, country) {
  var name = name || "john";
  var age = age || "29";
  var country = country || "colombia";
  console.log(name, age, country);
}

newUser();
newUser("david", 16, "colombia");

// parametros por defectos con es6

function newAdmin(name = "edward", age = 29, country = "usa") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("diana", 25, "chile");
