(function() {
  var x, _fn, _i, _j;

  for (x = _i = 1; _i <= 5; x = ++_i) {
    setTimeout(function() {
      console.log(x);
      return 1;
    });
  }

  _fn = function(x) {
    return setTimeout(function() {
      console.log(x);
      return 1;
    });
  };
  for (x = _j = 1; _j <= 5; x = ++_j) {
    _fn(x);
  }

}).call(this);
