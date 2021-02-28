dayOfWeek = prompt "Enter the day of week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):", ""

dayOfWeek = dayOfWeek.toLowerCase()

switch dayOfWeek
    when "monday", "tuesday", "wednesday", "thursday", "friday"
        document.write "Today is work day"
    when "saturday", "sunday"
        document.write "Today is weekend:)"
    else 
        document.write "Try again!" 