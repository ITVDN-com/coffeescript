(function() {
  var a, b, res, str;

  a = 5;

  b = 2;

  res = a + b;

  document.write("Оператор сложения a + b = " + res + "<br/>");

  res = a - b;

  document.write("Оператор вычитания a - b = " + res + "<br/>");

  res = a * b;

  document.write("Оператор умножения a * b = " + res + "<br/>");

  res = a / b;

  document.write("Оператор деления a / b = " + res + "<br/>");

  res = a % b;

  document.write("Оператор деления по модулю a % b = " + res + "<br/>");

  str = "25";

  res = +str;

  document.write("Унарный оператор преобразования строки в число +str = " + res + "<br/>");

  res = -b;

  document.write("Унарный оператор изменения знака числа -b = " + res + "<br/>");

  document.write("a = " + a + "<br/>");

  document.write("Оператор инкремента (префиксная форма) a++ = " + (a++) + "<br/>");

  document.write("a = " + a + "<br/>");

  document.write("Оператор инкремента (постфиксная форма) ++a = " + (++a) + "<br/>");

  document.write("a = " + a + "<br/>");

  document.write("Оператор декремента (префиксная форма) a-- = " + (a--) + "<br/>");

  document.write("a = " + a + "<br/>");

  document.write("Оператор декремента (постфиксная форма)--a = " + (--a) + "<br/>");

  document.write("a = " + a + "<br/>");

}).call(this);
