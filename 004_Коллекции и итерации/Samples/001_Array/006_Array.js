(function() {
  var a, arr, b, c, _i,
    __slice = [].slice;

  arr = ["apple", "banana", "orange", "lemon"];

  a = arr[0], b = 3 <= arr.length ? __slice.call(arr, 1, _i = arr.length - 1) : (_i = 1, []), c = arr[_i++];

  console.log("" + a + " \n " + b + " \n " + c);

}).call(this);
