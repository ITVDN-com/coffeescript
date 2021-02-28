# Определение функций внутри объектов

class Dog
    say: (x) ->
        console.log "Gaf-gaf".repeat(x)
        return

d = new Dog
d.say()     # Вызов функции     
 