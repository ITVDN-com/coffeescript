(function() {
  var dayOfWeek;

  dayOfWeek = prompt("Enter the day of week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):", "");

  dayOfWeek = dayOfWeek.toLowerCase();

  switch (dayOfWeek) {
    case "monday":
      document.write("Today is Monday");
      break;
    case "tuesday":
      document.write("Today is Tuesday");
      break;
    case "wednesday":
      document.write("Today is Wednesday");
      break;
    case "thursday":
      document.write("Today is Thursday");
      break;
    case "friday":
      document.write("Today is Friday");
      break;
    case "saturday":
      document.write("Today is Saturday");
      break;
    case "sunday":
      document.write("Today is Sunday");
      break;
    default:
      document.write("Try again!");
  }

}).call(this);
