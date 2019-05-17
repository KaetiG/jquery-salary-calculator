$(document).ready(readyNow);

function readyNow(){
    console.log( 'Page Ready');
$('.submitButton').on('click', submitButtonHandler);
}

function submitButtonHandler(){
    let empFirst= $('#firstNameInput').val();
    let empLast= $('#lastNameInput').val();
    let empId= $('#idInput').val();
    let empTitle= $('#titleInput').val();
    let empSalary= $('#salaryInput').val();
    $('#empTableBody').append(`<tr>
        <td>${empFirst}</td>
        <td>${empLast}</td>
        <td>${empId}</td>
        <td>${empTitle}</td>
        <td>${empSalary}</td>
        <td><button class="deleteButton">Delete</button></tr>`);
}

//function deleteButtonHandler(){

//}