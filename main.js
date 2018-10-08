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
    $('#tableBody').on('click', '.deleteButton', deleteEmployee);
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

//dispay array in table
function showArray() {
    console.log('show');
    $('#tableBody').empty();
    for (const employee of employeeArray) {
        console.log(employee);
        $('#tableBody').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td class="idNumber">${employee.idNumber}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button class="deleteButton">Delete</button></td></tr>`)
    }
} //end showArray

//delete employee on button press
function deleteEmployee() {
    console.log('delete');
    let idDelete = $(this).closest('tr').find('.idNumber').text();
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = employeeArray[i];
        if (employee.idNumber == idDelete) {
            employeeArray.splice(i,1)
        }
    }//end for loop
    showArray(); //update table
}//end deleteArray



//need to : clear input when submitted
    //calculate monthly cost and add to DOM
    //red if over budget
    //delete