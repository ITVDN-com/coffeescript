class Employee
    constructor: (@attr)->
    printInfo: ->
        console.log "Name #{@attr.name}"
        console.log "Position #{@attr.position}"
        console.log "Salary #{@attr.salary}"        
    bonus: ->
        0

# �������� ����� extends ��������� ����������� ����������� ����� �� ��� �������������
class Manager extends Employee
    bonus: ->
        @attr.salary * 10
    printInfo: ->
        super        # �������� ���������� ������� �� �������� ������
        console.log "Bonus: #{@bonus()}"
          
              
emp = new Employee
    name: "Vladimir"
    position: "Chief"
    salary: 50000
 
emp.printInfo()
    
manager = new Manager
    name: "Lusy"
    position: "Product Manager"
    salary: 10000

manager.printInfo