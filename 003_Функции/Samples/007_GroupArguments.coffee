# ������� ����� ����� ������ ���� ��������� ��������, ��� ���� �� ����� ���� �������� � ����� ����� ������ ����������

joinArgs = (firstArg, arr..., lastArg) ->
    document.write "������ �������� �������: #{firstArg}"
    document.write "<br />"
    document.write "������ ���������� � ������� arr: #{arr.join(' | ')}"
    document.write "<br />"
    document.write "��������� �������� �������: #{lastArg}"
    

joinArgs "First Argument", 1, 2, "qwerty", 3, 4, 5, 6, "Last Argument"
