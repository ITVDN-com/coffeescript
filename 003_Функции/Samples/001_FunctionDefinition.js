(function() {
  var f, func;

  f = function() {
    document.write("Это функция");
  };

  f();

  func = function() {
    alert("Hello");
  };

  func();

}).call(this);
