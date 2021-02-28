a = "Global variable"

func = ->
    document.write "1. Variable in function #{a} </br>"
    a = "Local variable"
    document.write "2. Variable in function #{a} </br>"
    return
    
alert a

func()

alert a