const taskList = [
    { id: Date.now() + 1, name: "Leer 60 minutos", completed: false },
    { id: Date.now() + 2, name: "Meditar", completed: false },
    { id: Date.now() + 3, name: "Estudiar JavaScript", completed: false }
];
const inputTarea = document.getElementById('input-tarea');
const botonAgregar = document.getElementById('boton-agregar');
const taskListDiv = document.getElementById('task-list');
const totalCounter = document.getElementById('total');
const realizadasCounter = document.getElementById('realizadas');

/* Contador total tareas*/
function updateCounters() {
        totalCounter.innerHTML = `${taskList.length}`;
        realizadasCounter.innerHTML = `${taskList.filter(task => task.completed).length}`;
}
/* Renderiza cada nuevo objeto */
function renderTasks() {
    taskListDiv.innerHTML = '';
    taskList.forEach(task => {
    const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
    const taskId = document.createElement('div');
        taskId.className = 'task-id';
        taskId.textContent = task.id;
        taskItem.appendChild(taskId);
    const taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.innerHTML = task.name;
        taskItem.appendChild(taskName);
    const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', () => {
            task.completed = taskCheckbox.checked;
    updateCounters();
});
/* Btn borrar */
    const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
    const taskIndex = taskList.findIndex(t => t.id === task.id);
        taskList.splice(taskIndex, 1);
    renderTasks();
    updateCounters();
});
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(deleteBtn);
    taskListDiv.appendChild(taskItem);
});}
/* Btn agregar */
botonAgregar.addEventListener('click', () => {
    const taskName = inputTarea.value.trim();
    if (taskName) {
        const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };
    taskList.push(newTask);
        renderTasks();
        updateCounters();
        inputTarea.value = '';
    }
});
renderTasks();
updateCounters();