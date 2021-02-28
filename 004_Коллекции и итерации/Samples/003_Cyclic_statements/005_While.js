(function() {
  var attempt, color, maxAttempt, s, value;

  s = "Угадайте задуманный цвет с пяти попыток.";

  maxAttempt = 5;

  attempt = 0;

  color = "red";

  while (attempt < maxAttempt) {
    attempt++;
    value = prompt("" + s + " Попытка " + attempt);
    if (value === null) {
      break;
    }
    if (value !== color) {
      s = "Вы не угадали.";
      continue;
    }
    document.write("<p>Поздравляем, Вы угадали с " + attempt + " попытки!");
    break;
  }

  document.write("<p>Конец игры!");

}).call(this);
