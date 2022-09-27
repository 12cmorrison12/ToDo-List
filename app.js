const toDoList = document.querySelector('ul');
const submitList = document.getElementById('listform');

//to add an item via the submit button form
const savedList = JSON.parse(localStorage.getItem('todos') || []);
    submitList.addEventListener("submit", function (e) {
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
