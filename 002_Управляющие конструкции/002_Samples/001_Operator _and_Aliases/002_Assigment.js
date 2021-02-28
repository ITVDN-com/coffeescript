(function() {
  var x, y, z;

  x = 10;

  y = 6;

  document.write("Оператор присвоения 'x = 10' => x = " + x + " <br/>");

  x += y;

  document.write("Оператор сложения и присвоения 'x += 10' => x = " + x + " <br/>");

  x -= y;

  document.write("Оператор вычитания и присвоения 'x -= 10' => x = " + x + " <br/>");

  x *= y;

  document.write("Оператор умножения и присвоения 'x *= 10' => x = " + x + " <br/>");

  x /= y;

  document.write("Оператор деления и присвоения 'x /= 10' => x = " + x + " <br/>");

  x %= y;

  document.write("Оператор деления по модулю и присвоения 'x %= 10' => x = " + x + " <br/>");

  z = 5 || y;

  document.write("Логическое ИЛИ 'z = 0 || y' => z = " + z + " <br/>");

  z = true && true;

  document.write("Логическое И 'z = 1 || 3' => z = " + z + " <br/>");

}).call(this);
