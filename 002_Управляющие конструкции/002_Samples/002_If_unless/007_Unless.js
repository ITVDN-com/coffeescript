(function() {
  var login;

  login = "Admin1";

  if (!(login === "Admin")) {
    alert("Здравствуйте, Гость!");
  } else {
    alert("Здравствуйте, Admin!");
  }

  if (login !== "Admin") {
    alert("Здравствуйте, Гость!");
  } else {
    alert("Здравствуйте, Admin!");
  }

}).call(this);
