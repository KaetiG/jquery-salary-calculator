$(document).ready(readyNow);

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
        <td>${empSalary}</td>
        <td><button class="deleteButton">Delete</button></tr>`);

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
}