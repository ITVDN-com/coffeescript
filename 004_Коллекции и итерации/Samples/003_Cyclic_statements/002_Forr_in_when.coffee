# Использование оператора when в цикле for in

arr = [100..200]

for item in arr
    if item % 2 > 0
        console.log item
        
for item in arr when item % 2 > 0
    console.log item