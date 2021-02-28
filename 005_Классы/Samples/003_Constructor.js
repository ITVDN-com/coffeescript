(function() {
  var Rectangle, r1;

  Rectangle = (function() {
    function Rectangle(w, h) {
      console.log("Created new object!");
      this.width = w;
      this.height = h;
    }

    Rectangle.prototype.getArea = function() {
      return this.width * this.height;
    };

    return Rectangle;

  })();

  r1 = new Rectangle(100, 200);

  console.log(r1.getArea());

}).call(this);
