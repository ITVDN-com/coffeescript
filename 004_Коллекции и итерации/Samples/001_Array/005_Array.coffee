# Используя массивы, можно производить деструктуризацию элементов массива
# В данном примере используется деструктуризация, что бы поменять местами значения переменных


var1 = "1"
var2 = "2"

document.write "var1 = #{var1} </br>"
document.write "var2 = #{var2} </br>"

[var1, var2] = [var2, var1]

document.write "var1 = #{var1} </br>"
document.write "var2 = #{var2} </br>"