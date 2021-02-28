# Как и в языке JavaScript функция может принимать аргументы, для произведения вычеслений,
# манипуляции данными и другие операции.

a = 5
b = 4
 
myFunc = (x, y) -> 
    if x > y
        alert x
        return
    else
        alert y
        return
        
myFunc a, b
