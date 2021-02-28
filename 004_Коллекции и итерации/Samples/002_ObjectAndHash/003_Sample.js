(function() {
  var person;

  person = {
    fName: "Petr",
    lName: "Petrov",
    introduce: function() {
      alert(this.fName + " " + this.lName);
    }
  };

  console.log(person.fName);

  console.log(person['lName']);

  person.introduce();

}).call(this);
