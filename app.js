/* As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo */

const toDoList = document.querySelector('ul');
const submitList = document.getElementById('listform');

//to add an item via the submit button form
submitList.addEventListener("submit", function(e) {
    e.preventDefault();

    const newToDo = document.createElement('li');
    toDoList.appendChild(newToDo);

    let deleteButton = document.createElement('button');
    deleteButton.className = "delete";

    newToDo.appendChild(deleteButton);
})

// to toggle strike through
toDoList.addEventListener('click', function(e) {
    if(e.target.className === 'li') {
        e.target.className.toggle('finished');
    } else if (e.target.className === 'delete') {
        e.target.className.remove();
    }
});
