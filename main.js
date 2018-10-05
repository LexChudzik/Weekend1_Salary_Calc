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
} // end addEmployee

//find monthly cost
function monthlyCost(array) {
    const months = 12;
    let annualCost = 0;
    for (let i = 0; i < array.length; i++) {
        annualCost += array[i].salary;
    }
    let monthlyCost = annualCost / months;
    return monthlyCost;
} //end monthlyCost

//need to : clear input when submitted
    //push to table
    //calculate monthly cost and add to DOM
    //red if over budget
    //delete