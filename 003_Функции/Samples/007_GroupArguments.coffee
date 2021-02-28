# Функция может иметь только один групповой аргумент, при этом он может быть размещен в любом месте списка аргументов

joinArgs = (firstArg, arr..., lastArg) ->
    document.write "Первый аргумент функции: #{firstArg}"
    document.write "<br />"
    document.write "Группа аргументов в массиве arr: #{arr.join(' | ')}"
    document.write "<br />"
    document.write "Последний аргумент функции: #{lastArg}"
    

joinArgs "First Argument", 1, 2, "qwerty", 3, 4, 5, 6, "Last Argument"
