(function() {
  var Barsik, Cat, isDefined, name, radio, variable, variable1;

  name = "Robert";

  document.write("name === 'Robert' " + (name === "Robert"));

  document.write("<br/>");

  document.write("name !== 'David' " + (name !== "David"));

  document.write("<br/>");

  variable = true;

  variable1 = false;

  document.write("Operator <b>not</b> - " + !variable);

  document.write("<br/>");

  document.write("Operator <b>isnt</b> - " + (variable !== variable1));

  document.write("<br/>");

  document.write("Operator <b>is not</b> - " + (variable === !variable1));

  document.write("<br/>");

  document.write("variable <b>and (&&)</b> - " + (variable && variable1));

  document.write("<br/>");

  document.write("variable <b>or (||)</b> - " + (variable || variable1));

  document.write("<br/>");

  isDefined = true;

  document.write("isDefined = " + isDefined);

  document.write("<br/>");

  isDefined = false;

  document.write("isDefined = " + isDefined);

  document.write("<br/>");

  radio = true;

  document.write("radio = " + radio);

  document.write("<br/>");

  radio = false;

  document.write("radio = " + radio);

  document.write("<br/>");

  Cat = function(name) {
    this.name = name;
    this.showName = function() {
      document.write("" + this.name + " is a cat");
    };
  };

  Barsik = new Cat("Barsik");

  Barsik.showName();

}).call(this);
