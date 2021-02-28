(function() {
  var User, bob, log, lusy,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  User = (function() {
    function User(name) {
      this.name = name;
      this.sayHi = __bind(this.sayHi, this);
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
