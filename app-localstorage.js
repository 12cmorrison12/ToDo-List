const toDoList = document.querySelector('ul');
const submitList = document.getElementById('listform');

const savedList = JSON.parse(localStorage.getItem('savedlist')) || [];
for (let todo of savedList) {
    todo = document.createElement('li');
    todo.innerText = savedList.task;

    if(todo.isCompleted === true) {
        todo.className = 'finished';
    }
    toDoList.appendChild(todo);
}

submitList.addEventListener('submit', function(e) {
    e.preventDefault();

    const newItem = document.createElement('li');
    const item = document.getElementById('input').value;

    newItem.innerText = item;
    toDoList.appendChild(newItem);

    savedList.push(newTodo.innerText);
    localStorage.setItem('savedlist');
});

toDoList.addEventListener('click', function(e) {
    if(e.target.className === 'li') {
        e.target.className.toggle('finished');
    } else if (e.target.className === 'delete') {
        e.target.className.remove();
    }
});