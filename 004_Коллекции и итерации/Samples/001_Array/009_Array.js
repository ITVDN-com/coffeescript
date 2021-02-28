(function() {
  var mass, myArr, _i, _ref, _results;

  myArr = (function() {
    _results = [];
    for (_i = 0; _i <= 50; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);

  console.log(myArr.slice(0, 11));

  mass = ['a', 'b', 'c', 'd', 'e', 'f'];

  console.log(mass);

  [].splice.apply(myArr, [0, 6].concat(mass)), mass;

  console.log(myArr);

  [].splice.apply(myArr, [10, (-1) - 10 + 1].concat(_ref = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), _ref;

  console.log(myArr);

}).call(this);
