
# ������������ ��������� 

cost = 0;

calculateTotal = (quantity, price, discount = 1) ->
    cost = quantity * price * discount
    document.write "����� ��������� ������ ����������: #{cost} y.e."
    return                                    # ������������ �������� �������


quantity = prompt "������� ���������� ������ ������", "0"
price = prompt  "������� ���� �� ������� ������", "0"

if quantity >= 10
    calculateTotal quantity, price, 0.75
else
    calculateTotal quantity, price