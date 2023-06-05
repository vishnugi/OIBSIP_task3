const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    return;
  }

  const task = {
    text: taskText,
    completed: false,
    timestamp: new Date().toISOString()
  };

  const listItem = createTaskListItem(task);
  pendingList.appendChild(listItem);

  taskInput.value = '';
}

function createTaskListItem(task) {
  const listItem = document.createElement('li');
  listItem.innerText = task.text;

  if (task.completed) {
    listItem.classList.add('completed');
    completedList.appendChild(listItem);
  } else {
    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';
    completeBtn.onclick = () => markTaskComplete(listItem, task);
    listItem.appendChild(completeBtn);

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&#10060;';
    deleteBtn.onclick = () => deleteTask(listItem);
    listItem.appendChild(deleteBtn);
  }

  return listItem;
}

function markTaskComplete(listItem, task) {
  listItem.classList.add('completed');
  completedList.appendChild(listItem);
  task.completed = true;
}

function deleteTask(listItem) {
  if (listItem.parentElement.id === 'pendingList') {
    pendingList.removeChild(listItem);
  } else {
    completedList.removeChild(listItem);
  }
}

// Example tasks (can be removed)
addTask();
addTask();
addTask();
