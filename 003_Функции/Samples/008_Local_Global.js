(function() {
  var a, func;

  a = "Global variable";

  func = function() {
    document.write("1. Variable in function " + a + " </br>");
    a = "Local variable";
    document.write("2. Variable in function " + a + " </br>");
  };

  alert(a);

  func();

  alert(a);

}).call(this);
