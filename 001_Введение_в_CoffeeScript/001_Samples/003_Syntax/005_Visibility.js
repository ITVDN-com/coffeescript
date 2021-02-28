(function() {
  var a, myFunc;

  a = 'Глобальная переменная<br />';

  myFunc = function() {
    var b;
    a = 'Локальная переменная, одноименная с глобальной<br />';
    document.write(a);
    b = 'Локальная переменная<br />';
    document.write(b);
  };

  document.write(a);

  myFunc();

  document.write(a);

  document.write(b);

}).call(this);
