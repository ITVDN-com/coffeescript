(function() {
  var Employee, Manager, emp, manager,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Employee = (function() {
    function Employee(attr) {
      this.attr = attr;
    }

    Employee.prototype.printInfo = function() {
      console.log("Name " + this.attr.name);
      console.log("Position " + this.attr.position);
      return console.log("Salary " + this.attr.salary);
    };

    Employee.prototype.bonus = function() {
      return 0;
    };

    return Employee;

  })();

  Manager = (function(_super) {
    __extends(Manager, _super);

    function Manager() {
      return Manager.__super__.constructor.apply(this, arguments);
    }

    Manager.prototype.bonus = function() {
      return this.attr.salary * 10;
    };

    Manager.prototype.printInfo = function() {
      Manager.__super__.printInfo.apply(this, arguments);
      return console.log("Bonus: " + (this.bonus()));
    };

    return Manager;

  })(Employee);

  emp = new Employee({
    name: "Vladimir",
    position: "Chief",
    salary: 50000
  });

  emp.printInfo();

  manager = new Manager({
    name: "Lusy",
    position: "Product Manager",
    salary: 10000
  });

  manager.printInfo;

}).call(this);
