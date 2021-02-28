(function() {
  var func,
    __slice = [].slice;

  func = function() {
    var val;
    val = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log("Lenght: " + val.length + ", Values: " + (val.join(', ')));
  };

  func(1, 2, 3, 4, 5, 6, 7, 8, 9);

  func("a", "b", "c", "d");

}).call(this);
