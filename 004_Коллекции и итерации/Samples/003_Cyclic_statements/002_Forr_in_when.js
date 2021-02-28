(function() {
  var arr, item, _i, _j, _k, _len, _len1, _results;

  arr = (function() {
    _results = [];
    for (_i = 100; _i <= 200; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);

  for (_j = 0, _len = arr.length; _j < _len; _j++) {
    item = arr[_j];
    if (item % 2 > 0) {
      console.log(item);
    }
  }

  for (_k = 0, _len1 = arr.length; _k < _len1; _k++) {
    item = arr[_k];
    if (item % 2 > 0) {
      console.log(item);
    }
  }

}).call(this);
