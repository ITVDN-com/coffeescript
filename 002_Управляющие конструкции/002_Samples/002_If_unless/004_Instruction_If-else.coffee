# ���� ���������� �����, ���������� ������ �� ����� ��� ���� ����� 3

number = prompt "Enter the number", ""

firstParty = parseInt number % 10

secondParty = parseInt number % 10

summOfParty = firstParty + secondParty

if (summOfParty % 3) > 0 
    document.write "����� #{summOfParty} �� �������� ������� ����"
else
    document.write "����� #{summOfParty} �������� ������� ����"
