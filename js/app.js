// Task Tracker - core application shell
console.log("Task Tracker application loaded");

// task status update
function updateTaskStatus(taskId, newStatus) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    throw new Error("Task not found.");
  }
  const validStatuses = ["pending", "in-progress", "completed"];
  if (!validStatuses.includes(newStatus)) {
    throw new Error("Invalid status value.");
  }
  task.status = newStatus;
  return task;
}

function renderTasks() {
  const list = document.getElementById("task-list");
  if (!list) return;
  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.title} (${t.status}) `;
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark Complete";
    completeBtn.addEventListener("click", () => {
      updateTaskStatus(t.id, "completed");
      renderTasks();
    });
    li.appendChild(completeBtn);
    list.appendChild(li);
  });
}
