dayOfWeek = prompt "Enter the day of week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):", ""

dayOfWeek = dayOfWeek.toLowerCase()

switch dayOfWeek
    when "monday"
        document.write "Today is Monday"
    when "tuesday"
        document.write "Today is Tuesday"
    when "wednesday"
        document.write "Today is Wednesday"    
    when "thursday"
        document.write "Today is Thursday"
    when "friday"
        document.write "Today is Friday"
    when "saturday"
        document.write "Today is Saturday" 
    when "sunday"
        document.write "Today is Sunday"
    else 
        document.write "Try again!" 