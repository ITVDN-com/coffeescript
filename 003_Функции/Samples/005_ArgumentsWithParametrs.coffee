
# Опциональные аргументы 

cost = 0;

calculateTotal = (quantity, price, discount = 1) ->
    cost = quantity * price * discount
    document.write "Общая стоимость товара составляет: #{cost} y.e."
    return                                    # Возвращаемое значение функции


quantity = prompt "Введите количество едениц товара", "0"
price = prompt  "Введите цену за еденицу товара", "0"

if quantity >= 10
    calculateTotal quantity, price, 0.75
else
    calculateTotal quantity, price