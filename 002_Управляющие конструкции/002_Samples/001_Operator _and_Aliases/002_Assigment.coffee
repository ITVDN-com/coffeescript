# ��������� ������������ � ����� CoffeeScript

x = 10                          # = - �������� ����������
y = 6
document.write "�������� ���������� 'x = 10' => x = #{x} <br/>"

x += y                          # x = x + y
document.write "�������� �������� � ���������� 'x += 10' => x = #{x} <br/>" 

x -= y                          # x = x - y
document.write "�������� ��������� � ���������� 'x -= 10' => x = #{x} <br/>" 

x *= y                          # x = x * y
document.write "�������� ��������� � ���������� 'x *= 10' => x = #{x} <br/>"

x /= y                          # x = x / y    
document.write "�������� ������� � ���������� 'x /= 10' => x = #{x} <br/>"

x %= y                          # x = x % y
document.write "�������� ������� �� ������ � ���������� 'x %= 10' => x = #{x} <br/>"    


z = 5 || y                      # �������� ���������� ��� 
document.write "���������� ��� 'z = 0 || y' => z = #{z} <br/>"   

z = true && true                   # �������� ���������� �
document.write "���������� � 'z = 1 || 3' => z = #{z} <br/>"   
                                                                                                                       