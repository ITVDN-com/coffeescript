(function() {
  var firstParty, number, secondParty, summOfParty;

  number = prompt("Enter the number", "");

  firstParty = parseInt(number % 10);

  secondParty = parseInt(number % 10);

  summOfParty = firstParty + secondParty;

  if ((summOfParty % 3) > 0) {
    document.write("Число " + summOfParty + " НЕ является кратным трем");
  } else {
    document.write("Число " + summOfParty + " является кратным трем");
  }

}).call(this);
