x = 1
y = 2
document.write "x = #{x}, y = #{y} <br/>"

z = x > y               # Оператор больше
document.write "z = x > y  => #{z} <br/>"

z = x >= y               # Оператор больше или равно
document.write "z = x >= y  => #{z} <br/>"

z = x < y               # Оператор меньше
document.write "z = x < y  => #{z} <br/>"

z = x <= y               # Оператор меньше или равно
document.write "z = x <= y  => #{z} <br/>"

z = x == y               # Оператор равно
document.write "z = x == y  => #{z} <br/>"

z = x != y               # Оператор не равно
document.write "z = x != y  => #{z} <br/>"


# Ошибка 
#   z = x === y               # идентично
#   z = x !== y               # не идентично

