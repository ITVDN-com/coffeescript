# while

s = "Угадайте задуманный цвет с пяти попыток."

maxAttempt = 5;   # Допустимое количество попыток.
attempt = 0;      # Счетчик попыток.
color = "red";    # Задуманный цвет.

while attempt < maxAttempt
    attempt++;

    value = prompt "#{s} Попытка #{attempt}"

    if value == null
        break;


    if value != color
        s = "Вы не угадали.";
        continue;


    document.write("<p>Поздравляем, Вы угадали с " + attempt + " попытки!");
    break;

document.write("<p>Конец игры!");
