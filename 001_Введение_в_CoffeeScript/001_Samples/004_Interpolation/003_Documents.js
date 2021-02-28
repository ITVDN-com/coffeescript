(function() {
  var name, someText, someValue;

  name = 1;

  someValue = 'Test\nExample      \nExa v        mple\nExample \n#{name}';

  alert(someValue);

  someText = "Test\nExample      \nExample\nExam            ple \n" + name;

  alert(someText);

}).call(this);
