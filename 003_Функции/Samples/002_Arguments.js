(function() {
  var a, b, myFunc;

  a = 5;

  b = 4;

  myFunc = function(x, y) {
    if (x > y) {
      alert(x);
    } else {
      alert(y);
    }
  };

  myFunc(a, b);

}).call(this);
