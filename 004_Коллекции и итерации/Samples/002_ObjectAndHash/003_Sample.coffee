# Использование оператора @ для указания ссылки на объект
person =
    fName: "Petr"
    lName: "Petrov"
    introduce: ->
        alert @fName + " " + @lName
        return
        
console.log person.fName
console.log person['lName']
person.introduce()
        