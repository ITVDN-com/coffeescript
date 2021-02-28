# В языке CoffeeScript появился цикл который осуществляет проход по значениям свойств объекта
car = 
    name: "Mersedec"
    year: 2006
    color: 'red'
    
for key, value of car
    console.log "#{key} - #{value} \n\r"
    

for key, value of car when key.length == 5
    console.log "#{key} - #{value} \n\r"
