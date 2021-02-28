(function() {
  var User, bob, log, lusy;

  User = (function() {
    function User(name) {
      this.name = name;
    }

    User.prototype.sayHi = function() {
      console.log("Hello " + this.name);
    };

    return User;

  })();

  log = function(callback) {
    console.log("execute callback function...");
    callback();
    return console.log("end execute.");
  };

  lusy = new User("Lusy");

  bob = new User("Bob");

  log(lusy.sayHi);

}).call(this);
