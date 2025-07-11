// to-do-app script.js placeholder
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage when page loads
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.done);
  });
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  createTaskElement(taskText, false);
  saveTasks();
  taskInput.value = '';
}

function createTaskElement(text, done) {
  const li = document.createElement('li');
  li.textContent = text;

  if (done) li.classList.add('done');

  li.addEventListener('click', () => {
    li.classList.toggle('done');
    saveTasks();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.border = 'none';
  deleteBtn.style.background = 'transparent';
  deleteBtn.style.cursor = 'pointer';

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save all tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      done: li.classList.contains('done'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
