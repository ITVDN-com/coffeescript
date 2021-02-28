(function() {
  var s;

  s = "";

  while (s !== "stop") {
    s = prompt("Введите 'stop' что бы остановить работу цикла");
    document.write(s + "<br />");
  }

  document.write("Конец цикла!");

}).call(this);
