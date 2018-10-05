console.log('JS');

let employeeArray = [];

class Employee {
    constructor(firstName, lastName, idNumber, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.salary = salary;
    }
}

$(document).ready(onReady);

function onReady() {
    console.log('jQ');
    $('#addEmployee').on('click', addEmployee);
}

function addEmployee(event) {
    event.preventDefault();
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumberIn = $('#idNumber').val();
    let titleIn = $('#title').val();
    let salaryIn = $('#salary').val();
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, titleIn, salaryIn);
    employeeArray.push(newEmployee);
    console.log(employeeArray);
}