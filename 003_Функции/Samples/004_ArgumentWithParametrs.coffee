# � ����� CoffeeScript ���� ����������� ����������� ���������� �������� �� ���������.

# ��� ������������� ����������, ������� ����� �������� �� ���������, ������� ������� ��� ��� ����� ���� ���������� � ������ ����������.


href = (link, text = "itvdn.com") ->	
    document.write "<a href='http://#{link}'> #{text}</a><br/>"
    return                               # ������������ �������� �������

href "itvdn.com"

href "cbsystematics.com", "CyberaBionicSystematics"

