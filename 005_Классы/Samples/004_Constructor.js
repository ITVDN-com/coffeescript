(function() {
  var Human, h1;

  Human = (function() {
    function Human(attr) {
      this.attr = attr;
      console.log(this.attr.name);
      console.log(this.attr.age);
      console.log(this.attr.position);
    }

    return Human;

  })();

  h1 = new Human({
    name: "Mark",
    age: 21,
    position: "Developer"
  });

}).call(this);
