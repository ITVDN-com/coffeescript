(function() {
  var author, name, obj, year;

  obj = {
    name: "Eleonor",
    color: "blue",
    yearProduction: 1986
  };

  name = obj.name, author = obj.author, year = obj.year;

  console.log(name);

  console.log(author);

  console.log(year);

}).call(this);
