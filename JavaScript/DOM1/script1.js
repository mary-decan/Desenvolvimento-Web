const STORAGE_KEY = 'todoListTasks';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function removeTask(taskText) {
    tasks = tasks.filter(task => task.text !== taskText);
    saveTasks();
    renderTasks();
}

function createTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    
    removeButton.addEventListener('click', () => {
        removeTask(taskText); 
    });

    listItem.appendChild(removeButton); 
    taskList.appendChild(listItem);
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        createTaskElement(task.text);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);

    saveTasks();
    createTaskElement(taskText);
    taskInput.value = '';
}

loadTasks();
renderTasks();

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});