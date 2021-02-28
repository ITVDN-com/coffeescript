ageEnter = +prompt "Введите Ваш возраст", ""

age = if ageEnter > 0 then "Ваш возраст #{ageEnter}" else "Такого возраста быть не может"

document.write age