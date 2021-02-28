
/*

Когда переменные в языке JavaScript создаются без ключевого слова var,
они помещаются в глобальное пространство имен, доступное в любом месте.

При обьявлении с использованием ключевого слова var, она все равно оказывается в глобальном пространстве имен,
если находится вне тела каких-либо функций.
 */

(function() {
  var myVariable;

  myVariable = "Local Variable";

  window.globalVariable = "Global variable";

  this.globalVariable1 = "Global variable 1";

  this.globalVariable2 = "Global variable 2";

}).call(this);
