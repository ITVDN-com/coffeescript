# while

s = "�������� ���������� ���� � ���� �������."

maxAttempt = 5;   # ���������� ���������� �������.
attempt = 0;      # ������� �������.
color = "red";    # ���������� ����.

while attempt < maxAttempt
    attempt++;

    value = prompt "#{s} ������� #{attempt}"

    if value == null
        break;


    if value != color
        s = "�� �� �������.";
        continue;


    document.write("<p>�����������, �� ������� � " + attempt + " �������!");
    break;

document.write("<p>����� ����!");
