# ¬ €зыке CoffeeScript по€вилась возможность создани€ генероторов
# √енераторы это обычные циклы, в которых блок кода находитс€ в той же строки что и инструкци€ цикла
gen = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log item for item in gen

temp = (item for item in gen when item >= 5)

console.log temp