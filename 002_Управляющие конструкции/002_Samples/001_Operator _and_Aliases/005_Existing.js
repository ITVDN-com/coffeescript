(function() {
  var y, z;

  console.log(typeof x !== "undefined" && x !== null);

  y = 5;

  if (y != null) {
    console.log(y);
  }

  z = null;

  if (z == null) {
    z = 8;
  }

}).call(this);
