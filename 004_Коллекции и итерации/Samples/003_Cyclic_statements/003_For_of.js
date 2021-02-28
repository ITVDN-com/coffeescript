(function() {
  var car, key, value;

  car = {
    name: "Mersedec",
    year: 2006,
    color: 'red'
  };

  for (key in car) {
    value = car[key];
    console.log("" + key + " - " + value + " \n\r");
  }

  for (key in car) {
    value = car[key];
    if (key.length === 5) {
      console.log("" + key + " - " + value + " \n\r");
    }
  }

}).call(this);
