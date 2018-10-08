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
    $('.deleteButton').on('click', deleteEmployee);
}

//add input to array
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
    showArray();
} // end addEmployee

//find monthly cost
function monthlyCost(array) {
    const months = 12;
    let annualCost = 0;
    parseFloat(annualCost);
    for (const employee of employeeArray) {
        annualCost += parseFloat(employee.salary);
    }
    let monthlyCost = annualCost / months;
    return monthlyCost;
} //end monthlyCost

function showArray() {
    console.log('show');
    $('#table').empty();
    for (const employee of employeeArray) {
        console.log(employee);
        $('#table').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button class="deleteButton">Delete</button></td></tr>`)
    }
} //end showArray



//need to : clear input when submitted
    //push to table
    //calculate monthly cost and add to DOM
    //red if over budget
    //delete