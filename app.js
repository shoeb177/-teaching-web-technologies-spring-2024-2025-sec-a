const tasks = [];

function addTask() {
  const name = document.getElementById("task-name").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value;

  const task = {
    name,
    dueDate,
    priority,
    category
  };

  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("task-container");
  container.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.priority}`;
    li.innerHTML = `
      <strong>${task.name}</strong> 
      <em>(${task.category})</em> - Due: ${new Date(task.dueDate).toLocaleString()}
    `;
    container.appendChild(li);
  });
}
