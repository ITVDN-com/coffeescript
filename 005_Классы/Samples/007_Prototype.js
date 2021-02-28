(function() {
  var err, myArr;

  myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  try {
    console.log(myArr.size());
  } catch (_error) {
    err = _error;
    console.log(err);
  }

  Array.prototype.size = function() {
    return this.length;
  };

  console.log(myArr.size());

  myArr.push(11);

  console.log(myArr.size());

}).call(this);
