func = (a, b, c)->
    a += 1
    b -= 2
    c *= 3
    return [a, b, c] 
    

a = func(1, 2, 3)   # ���������� � ������ ������

console.log a   

[x, y, z] = func(4, 5, 6)   # ��� ����������� ��������� ������� ������������ ����������������

console.log x       
console.log y
console.log z