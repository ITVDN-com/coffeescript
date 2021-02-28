(function() {
  var counter, pow, x, z;

  x = 2;

  z = 1;

  pow = function(x) {
    return x * x;
  };

  counter = function() {
    z++;
  };

  document.write("Возвращаемое значение функции pow(): " + pow(x));

}).call(this);
