$(document).ready(readyNow);
let totalSal = 0;
const makeIntoMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

function readyNow(){
    console.log( 'Page Ready');
$('.submitButton').on('click', submitButtonHandler);
$('#empTableBody').on('click', '.deleteButton' , deleteButtonHandler);
}

function submitButtonHandler(){
//declares local variable to use later
    let empFirst= $('#firstNameInput').val();
    let empLast= $('#lastNameInput').val();
    let empId= $('#idInput').val();
    let empTitle= $('#titleInput').val();
    let empSalary= $('#salaryInput').val();
//adds new row using inputs from text fields plus button
    $('#empTableBody').append(`<tr>
        <td>${empFirst}</td>
        <td>${empLast}</td>
        <td>${empId}</td>
        <td>${empTitle}</td>
        <td class="indSal">${empSalary}</td>
        <td><button class="deleteButton">Delete</button></tr>`);
//adds values from salary 
    let i = 0
    let totalSal = 0;
    let salAddition= $('.indSal');
    console.log('in salad', salAddition);
    for (i = 0; i < salAddition.length; i++ ) {
        console.log(salAddition[i].innerHTML);
        totalSal += Number(salAddition[i].innerHTML);
        console.log(totalSal);
    
    }

//adds conditional wherein if total monthly salaries is greater than 20k, 
//css styling for the div changes background color to red
    if (totalSal / 12 > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    }
$('#totalMonthly').append('Total Monthly:', ' ', makeIntoMoney.format(totalSal / 12));
    
//clears all text box fields for new entries
    $('#firstNameInput').val(' ');
    $('#lastNameInput').val(' ');
    $('#idInput').val(' ');
    $('#titleInput').val(' '); 
    $('#salaryInput').val(' ');
//REMINDER: google how to get placeholder text back lol   

}

function deleteButtonHandler(){
    $(this).closest('tr').remove();
    if (totalSal/12 < 20000) {
        $('totalMonthly').css('background-color', 'white')
    }
}