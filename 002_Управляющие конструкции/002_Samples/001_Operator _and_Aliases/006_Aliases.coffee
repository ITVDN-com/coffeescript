# Псевдонимы в CoffeeScript позволяют сделать код более дружественее.

# Ниже приведенна таблица псевдонимов в языке CoffeeScript и их аналоги в языке JavaScript
#
#      |     CoffeeScript    |     JavaScript      |    
#      ---------------------------------------------     
#      |    is               |  ===                |
#      |    isnt             |  !==                |
#      |    not              |  !                  |
#      |    and              |  &&                 |
#      |    or               |  ||                 |
#      |    true, yes, on    |  true               |
#      |    false, no, off   |  false              |
#      |    @, this          |  this               |
#      |    of               |  in                 | 
#      |    in               |  не опеделен        |
#      ---------------------------------------------


name = "Robert"

# is & isnt

document.write "name === 'Robert' #{name is "Robert"}"
document.write "<br/>"
document.write "name !== 'David' #{name isnt "David"}"
document.write "<br/>"

# not

variable = true; variable1 = false;
document.write "Operator <b>not</b> - " + not variable
document.write "<br/>"
document.write "Operator <b>isnt</b> - " + (variable isnt variable1) 
document.write "<br/>"
document.write "Operator <b>is not</b> - " + (variable is not variable1)   # Нужно быть осторожнм
document.write "<br/>"

# and, or

document.write "variable <b>and (&&)</b> - " + (variable and variable1)
document.write "<br/>"
document.write "variable <b>or (||)</b> - " + (variable or variable1)
document.write "<br/>"

# logic aliases

isDefined = yes     # true
document.write "isDefined = #{isDefined}"
document.write "<br/>"

isDefined = no      # false
document.write "isDefined = #{isDefined}"
document.write "<br/>"

radio = on          # true
document.write "radio = #{radio}"
document.write "<br/>"

radio = off         # false
document.write "radio = #{radio}"
document.write "<br/>"


# This

Cat = (name) ->
    @name = name
    @showName = -> 
        document.write "#{@name} is a cat"
        return
    return
    
Barsik = new Cat("Barsik")
Barsik.showName()


