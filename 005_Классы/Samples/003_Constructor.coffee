# Функция с именем constructor вызывается при создании новых экземпляров объекта

class Rectangle
    constructor: (w, h) ->
        console.log "Created new object!"
        @width = w
        @height = h
    getArea: ->
        return @width * @height

r1 = new Rectangle(100, 200)
console.log r1.getArea()