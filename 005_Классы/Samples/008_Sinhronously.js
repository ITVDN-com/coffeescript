(function() {
  var output;

  output = function(msg, delay) {
    return setTimeout(function() {
      return console.log(msg, delay);
    });
  };

  output("Hello", 3000);

  output("World", 1000);

}).call(this);
