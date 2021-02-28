
/*

Механизм интерполяции строк позволяет легко динамически конструировать строки,
без необходимости использования синтаксиса конкатенации строк. Встроенные документы дают возможность 
встраивать отформатированный многострочный текст.
 */

(function() {
  var Name, field, str;

  Name = "Ivan";

  field = "My name is " + Name;

  document.write(field + "<br />");

  str = "1 + 2 = " + (1 + 2);

  document.write(str);

}).call(this);
