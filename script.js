function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const dateTime = new Date();
    const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString().split(' ')[0]}`;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} <span class="time">(${formattedDateTime})</span></span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">✎</button>
            <button class="delete-btn" onclick="deleteTask(this)">✘</button>
            <button class="complete-btn" onclick="toggleComplete(this)">✔</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector('span').textContent.split(' (')[0];
    const newText = prompt('Edit task:', taskText);

    if (newText !== null && newText.trim() !== '') {
        li.querySelector('span').innerHTML = `${newText} <span class="time">(${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString().split(' ')[0]})</span>`;
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function toggleComplete(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}
