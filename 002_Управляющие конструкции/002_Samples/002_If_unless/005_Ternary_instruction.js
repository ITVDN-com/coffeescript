(function() {
  var age, ageEnter;

  ageEnter = +prompt("Введите Ваш возраст", "");

  age = ageEnter > 0 ? "Ваш возраст " + ageEnter : "Такого возраста быть не может";

  document.write(age);

}).call(this);
