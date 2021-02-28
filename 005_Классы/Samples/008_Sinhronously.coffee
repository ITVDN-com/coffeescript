output = (msg, delay) ->
    setTimeout ->
        console.log msg
        , delay
        
output "Hello", 3000
output "World", 1000

        