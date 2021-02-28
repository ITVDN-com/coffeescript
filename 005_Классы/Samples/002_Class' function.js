(function() {
  var Dog, d;

  Dog = (function() {
    function Dog() {}

    Dog.prototype.say = function(x) {
      console.log("Gaf-gaf".repeat(x));
    };

    return Dog;

  })();

  d = new Dog;

  d.say();

}).call(this);
