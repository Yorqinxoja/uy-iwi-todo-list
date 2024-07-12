let todos = [];
function addTask() {

    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value;


    if (taskName === '') {
        alert('Please enter a task!');
        return;
    }


    let now = new Date();
    let todo = {
        name: taskName,
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    };

    todos.push(todo);

    taskInput.value = '';

    updateTaskList();
}


function updateTaskList() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';


    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${todo.name} <span>${todo.hour}:${todo.minute}:${todo.second}</span>`;


        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {

    todos.splice(index, 1);


    updateTaskList();
}
