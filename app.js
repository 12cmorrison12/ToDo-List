/* As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo */

function toggleToDos() {
    const toDo = document.querySelectorAll('li');

    for (let li of toDo) {
        li.classList.toggle('finished');
    }
}
