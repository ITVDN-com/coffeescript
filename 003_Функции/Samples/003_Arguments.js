
/*
    Факториал с помощью саморекурсии

    Факториал числа n (обозначается n!, произносится - эн факториал) — это произведение всех натуральных чисел,
    от 1 до n включительно:
        n! = 1 * 2 * 3 * ... * n
        0! = 1

    В комбинаторике факториал натурального числа n интерпретируется как количество перестановок множества из n элементов.
    Например, для множества {A,B,C,D} из 4-х элементов существует: 4! = 1 * 2 * 3 * 4 = 24 перестановки:

        ABCD  BACD  CABD  DABC
        ABDC  BADC  CADB  DACB
        ACBD  BCAD  CBAD  DBAC
        ACDB  BCDA  CBDA  DBCA
        ADBC  BDAC  CDAB  DCAB
        ADCB  BDCA  CDBA  DCBA
 */

(function() {
  var factorial, input;

  input = prompt("Введите число: ");

  input = parseInt(input);

  factorial = function(x) {
    if (x <= 1) {
      return 1;
    }
    return x * factorial(x - 1);
  };

  document.write("Факториал " + input + "! = " + factorial(input));

}).call(this);
