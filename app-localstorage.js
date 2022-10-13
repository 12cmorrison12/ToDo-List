const toDoList = document.querySelector('ul');
const submitList = document.getElementById('listform');

const savedList = JSON.parse(localStorage.getItem('savedlist')) || [];
for (let task of savedList) {
    let todo = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = task[0];
    if (task[1] === true) {
        span.classList.add("finished");
    } else {
        span.classList.add("todos")
    };
    todo.append(span);
    toDoList.appendChild(todo);
}

submitList.addEventListener('submit', function (e) {
    e.preventDefault();

    const newItem = document.createElement('li');
    const span = document.createElement('span');
    const item = document.getElementById('input').value;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'x';

    span.innerText = item;
    span.className = 'todos';
    newItem.append(span);
    toDoList.appendChild(newItem);
    newItem.append(deleteBtn);

    savedList.push([item, false]);
    localStorage.setItem('savedlist', JSON.stringify(savedList));
});

toDoList.addEventListener('click', function (e) {
    console.log(e.target.className)
    if (e.target.className === 'todos') {
        e.target.className = 'finished';
        for (let index = 0; index < savedList.length; index++) {
            if (e.target.textContent === savedList[index][0]) {
                savedList[index][1] = true;
                break;
            }
        }
    } else if (e.target.tagName === 'BUTTON') {
        for (let index = 0; index < savedList.length; index++) {
            if (e.target.parentNode.childNodes[0].textContent === savedList[index][0]) {
                savedList.splice(index, 1);
                e.target.parentNode.remove();
            }
        }
    }
    localStorage.setItem('savedlist', JSON.stringify(savedList));
});
