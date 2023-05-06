console.log('hi');

$(document).ready(onReady);

function onReady(){
    let submitButton = $('#submit-button').val();
//handleSubmit on click button stuff

//change the onclick to submit if things are in the html forms 


}
function handleSubmit(event){
    console.log('These are things to do');
    event.preventDefault(); 

    let firstName = $('#first-name').val(); //
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();



}
/*
function 
    let employeeInfo=[];
    function employeeObject(){
        firstName:,
        lastName:,
        idNumber:,
        jobTitle:,
        annualSalary:

    }


*/






function handleDelete() {
    $(this).parent().parent().remove();
}