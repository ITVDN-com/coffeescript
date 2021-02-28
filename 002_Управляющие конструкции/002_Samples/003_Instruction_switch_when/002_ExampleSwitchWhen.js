(function() {
  var dayOfWeek;

  dayOfWeek = prompt("Enter the day of week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):", "");

  dayOfWeek = dayOfWeek.toLowerCase();

  switch (dayOfWeek) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      document.write("Today is work day");
      break;
    case "saturday":
    case "sunday":
      document.write("Today is weekend:)");
      break;
    default:
      document.write("Try again!");
  }

}).call(this);
