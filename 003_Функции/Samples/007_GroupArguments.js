(function() {
  var joinArgs,
    __slice = [].slice;

  joinArgs = function() {
    var arr, firstArg, lastArg, _i;
    firstArg = arguments[0], arr = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), lastArg = arguments[_i++];
    document.write("Первый аргумент функции: " + firstArg);
    document.write("<br />");
    document.write("Группа аргументов в массиве arr: " + (arr.join(' | ')));
    document.write("<br />");
    return document.write("Последний аргумент функции: " + lastArg);
  };

  joinArgs("First Argument", 1, 2, "qwerty", 3, 4, 5, 6, "Last Argument");

}).call(this);
