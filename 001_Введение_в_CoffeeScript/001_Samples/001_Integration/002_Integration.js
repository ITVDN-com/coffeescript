(function() {
  var array, index, _i, _j, _len, _results;

  array = (function() {
    _results = [];
    for (_i = 0; _i <= 100; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);

  for (_j = 0, _len = array.length; _j < _len; _j++) {
    index = array[_j];
    console.log(index);
  }

}).call(this);
