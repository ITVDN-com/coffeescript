class User
    constructor: (@name) ->
    sayHi: =>
        console.log "Hello #{@name}"
        return

log = (callback) ->
    console.log "execute callback function..."
    callback()
    console.log "end execute."


lusy = new User("Lusy")
bob = new User("Bob")

log(lusy.sayHi)
