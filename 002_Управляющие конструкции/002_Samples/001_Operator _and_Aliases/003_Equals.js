(function() {
  var x, y, z;

  x = 1;

  y = 2;

  document.write("x = " + x + ", y = " + y + " <br/>");

  z = x > y;

  document.write("z = x > y  => " + z + " <br/>");

  z = x >= y;

  document.write("z = x >= y  => " + z + " <br/>");

  z = x < y;

  document.write("z = x < y  => " + z + " <br/>");

  z = x <= y;

  document.write("z = x <= y  => " + z + " <br/>");

  z = x === y;

  document.write("z = x == y  => " + z + " <br/>");

  z = x !== y;

  document.write("z = x != y  => " + z + " <br/>");

}).call(this);
