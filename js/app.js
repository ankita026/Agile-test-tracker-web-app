// Task Tracker - core application shell
console.log("Task Tracker application loaded");

// task creation
let tasks = [];

function createTask(title, dueDate) {
  if (!title || title.trim() === "") {
    throw new Error("Task title cannot be empty.");
  }
  const task = {
    id: tasks.length + 1,
    title: title.trim(),
    dueDate: dueDate || null,
    status: "pending"
  };
  tasks.push(task);
  return task;
}

function renderTasks() {
  const list = document.getElementById("task-list");
  if (!list) return;
  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.title} (${t.status})`;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("add-task-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const titleInput = document.getElementById("task-title");
      try {
        createTask(titleInput.value);
        titleInput.value = "";
        renderTasks();
      } catch (e) {
        alert(e.message);
      }
    });
  }
});
