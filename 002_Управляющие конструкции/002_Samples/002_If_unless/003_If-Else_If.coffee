a = prompt("������� ����� Hello, ��� World", "Hello");

if a == "Hello" || a == 'hello'
    document.write("��������� �������� ����� � ����� Hello");
else if a == "World" || a == 'world'                        # ���������� ���� ��������� � ������ ����������� ����� false 
    document.write("��������� �������� ����� � ����� World");
else
    document.write("��������� �������� �� �����");

document.write("<br/>��� ������ ���������� � ����� ������");
