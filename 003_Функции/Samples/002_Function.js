(function() {
  var age, ask, name, say, sname;

  name = "";

  sname = "";

  age = 0;

  ask = function() {
    name = prompt("Введите свое имя:");
    sname = prompt("Введите свою фамилию:");
    return age = prompt("Введите свой возраст:");
  };

  say = function() {
    document.write("Имя: " + name + " <br />");
    document.write("Фамилия: " + sname + " <br />");
    document.write("Возраст: " + age + " <br />");
    return document.write("<hr/>");
  };

  ask();

  say();

}).call(this);
