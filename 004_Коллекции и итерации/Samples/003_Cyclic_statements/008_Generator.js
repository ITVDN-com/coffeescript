(function() {
  var gen, item, temp, _i, _len;

  gen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (_i = 0, _len = gen.length; _i < _len; _i++) {
    item = gen[_i];
    console.log(item);
  }

  temp = (function() {
    var _j, _len1, _results;
    _results = [];
    for (_j = 0, _len1 = gen.length; _j < _len1; _j++) {
      item = gen[_j];
      if (item >= 5) {
        _results.push(item);
      }
    }
    return _results;
  })();

  console.log(temp);

}).call(this);
