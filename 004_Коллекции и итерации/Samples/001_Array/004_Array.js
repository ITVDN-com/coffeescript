(function() {
  var arr,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  if (__indexOf.call(arr, 'd') >= 0) {
    alert("'b' is found");
  }

}).call(this);
