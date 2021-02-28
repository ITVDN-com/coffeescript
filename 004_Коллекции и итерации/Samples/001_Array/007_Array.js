(function() {
  var a, func, x, y, z, _ref;

  func = function(a, b, c) {
    a += 1;
    b -= 2;
    c *= 3;
    return [a, b, c];
  };

  a = func(1, 2, 3);

  console.log(a);

  _ref = func(4, 5, 6), x = _ref[0], y = _ref[1], z = _ref[2];

  console.log(x);

  console.log(y);

  console.log(z);

}).call(this);
