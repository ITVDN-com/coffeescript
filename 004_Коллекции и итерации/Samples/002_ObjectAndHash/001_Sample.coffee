obj = {}    # Создание пустого объекта

obj1 =      # Создание объекта и добавление к нему свойств
    firstName: "Andrew"
    lastName: "Andreev"
    age: 21

console.log obj1    

obj2 = { firstName: "Andrew", lastName: "Andreev", age: 21} # Создание объекта в одной строке

human = 
    firstName: "Ivan"
    age: 18
    say: ->     # Создание функции в объекте
        alert "My name is #{this.firstName}. I'm #{this.age} old."

human.say()


