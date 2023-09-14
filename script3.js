function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = document.getElementById('taskDescription');
    const taskText = taskInput.value.trim();
    const descriptionText = taskDescription.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-description">${descriptionText}</span>
            <input type="checkbox" class="completeTask" onchange="completeTask(this)">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;

        const pendingTasks = document.getElementById('pendingTasks');
        pendingTasks.appendChild(taskItem);

        taskInput.value = '';
        taskDescription.value = '';
    }
}

function completeTask(checkbox) {
    const taskItem = checkbox.parentElement;
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    if (checkbox.checked) {
        completedTasks.appendChild(taskItem);
    } else {
        pendingTasks.appendChild(taskItem);
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    const taskDescriptionElement = taskItem.querySelector('.task-description');
    const taskText = taskTextElement.textContent;
    const taskDescription = taskDescriptionElement.textContent;

    const newTaskText = prompt('Edit task:', taskText);
    const newTaskDescription = prompt('Edit description:', taskDescription);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.textContent = newTaskText.trim();
    }

    if (newTaskDescription !== null && newTaskDescription.trim() !== '') {
        taskDescriptionElement.textContent = newTaskDescription.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.parentElement.removeChild(taskItem);
}
