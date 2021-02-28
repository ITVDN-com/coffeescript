myArr = [0..10]

try
    console.log myArr.size()
catch err
    console.log err

# :: - обращение к прототипу функции    
            
Array::size = -> @length

console.log myArr.size()

myArr.push 11

console.log myArr.size()