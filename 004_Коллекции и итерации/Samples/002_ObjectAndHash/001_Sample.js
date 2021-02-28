(function() {
  var human, obj, obj1, obj2;

  obj = {};

  obj1 = {
    firstName: "Andrew",
    lastName: "Andreev",
    age: 21
  };

  console.log(obj1);

  obj2 = {
    firstName: "Andrew",
    lastName: "Andreev",
    age: 21
  };

  human = {
    firstName: "Ivan",
    age: 18,
    say: function() {
      return alert("My name is " + this.firstName + ". I'm " + this.age + " old.");
    }
  };

  human.say();

}).call(this);
