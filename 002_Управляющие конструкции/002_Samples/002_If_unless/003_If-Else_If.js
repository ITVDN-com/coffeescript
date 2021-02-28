(function() {
  var a;

  a = prompt("Введите слово Hello, или World", "Hello");

  if (a === "Hello" || a === 'hello') {
    document.write("Введенное значение верно и равно Hello");
  } else if (a === "World" || a === 'world') {
    document.write("Введенное значение верно и равно World");
  } else {
    document.write("Введенное значение НЕ верно");
  }

  document.write("<br/>Эта строка выполнится в любом случае");

}).call(this);
