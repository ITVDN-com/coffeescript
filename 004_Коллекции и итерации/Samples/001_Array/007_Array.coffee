func = (a, b, c)->
    a += 1
    b -= 2
    c *= 3
    return [a, b, c] 
    

a = func(1, 2, 3)   # переменная а хранит массив

console.log a   

[x, y, z] = func(4, 5, 6)   # над возращаемым значением функции производится деструктуризация

console.log x       
console.log y
console.log z