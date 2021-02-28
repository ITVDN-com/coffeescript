(function() {
  var even, i, item, numbers, words, _i, _j, _k, _len, _len1, _results;

  words = ['apple', 'orange', 'lemon'];

  for (_i = 0, _len = words.length; _i < _len; _i++) {
    item = words[_i];
    console.log(item.toUpperCase());
  }

  numbers = (function() {
    _results = [];
    for (_j = 0; _j <= 50; _j++){ _results.push(_j); }
    return _results;
  }).apply(this);

  even = [];

  for (_k = 0, _len1 = numbers.length; _k < _len1; _k += 2) {
    i = numbers[_k];
    even.push(i);
  }

  console.log(even);

}).call(this);
