a = '���������� ����������<br />';        # ���������� �������� � ���������� ������� ���������

myFunc = -> 
    a = '��������� ����������, ����������� � ����������<br />';  # ���������� ����������� � ���������� ����������    
    document.write a
    b = '��������� ����������<br />';    # ��� ������ ������������� - ��������� ����������
    document.write b
    return

document.write(a);

myFunc();

document.write(a);

document.write(b); 
