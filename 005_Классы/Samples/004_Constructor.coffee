class Human
    constructor: (@attr)->
        console.log @attr.name
        console.log @attr.age
        console.log @attr.position

h1 = new Human
    name: "Mark"
    age: 21
    position: "Developer"      