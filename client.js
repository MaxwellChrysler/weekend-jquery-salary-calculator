console.log('hi');

$(document).ready(onReady);

function onReady(){
    let submitButton = $('#submit-button').val();
    $('#form-input').on('submit', submitHandle);
    $('#table-input').on('click', '.delete-btn', handleDelete)
//handleSubmit on click button stuff

//change the onclick to submit if things are in the html forms      
}

//When adding the annual salaries together make sure to divide by 12 and then to round the averages so it looks good 
//use like .math or something
function submitHandle(event){
    let employeeInfo=[];

    console.log('These are things to do');
    event.preventDefault(); 

    let firstName = $('#first-name').val(); //
    let lastName = $('#last-name').val();
    let idNumber = $('#ID').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();

    $('#table-input').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>$${annualSalary}</td>
    <td><button class = "delete-btn">delete</button></td>
    </tr>`);
}

function totalSalary(){
    salary = Number($('#Salary')).val();
    monthlyCost += salary
    if (monthlyCost<20000){
        
    }
}

function handleDelete() {
    $(this).parent().parent().remove();
}