const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.name}</span>
      <span class="delete-btn" onclick="deleteTask(${index})">❌</span>
    `;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName === "") return;

  tasks.push({ name: taskName, completed: false });
  taskInput.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();
