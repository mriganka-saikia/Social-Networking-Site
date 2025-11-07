const BASE_URL = "https://your-backend-url.onrender.com/api"; // change after deployment

// ============ LOCAL STORAGE FALLBACK ============ //
function loadLocalTasks() {
  return JSON.parse(localStorage.getItem("tasksLocal") || "[]");
}
function saveLocalTasks(tasks) {
  localStorage.setItem("tasksLocal", JSON.stringify(tasks));
}
function addLocalTask(title, desc) {
  const tasks = loadLocalTasks();
  const newTask = { id: Date.now().toString(), title, description: desc, status: "Pending" };
  tasks.push(newTask);
  saveLocalTasks(tasks);
}
function updateLocalTask(id, updatedTask) {
  const tasks = loadLocalTasks().map(t => (t.id === id ? { ...t, ...updatedTask } : t));
  saveLocalTasks(tasks);
}
function deleteLocalTask(id) {
  const tasks = loadLocalTasks().filter(t => t.id !== id);
  saveLocalTasks(tasks);
}
function renderLocalTasks() {
  renderTasks(loadLocalTasks());
}

// ============ BACKEND INTERACTIONS ============ //
async function getTasks() {
  const token = localStorage.getItem("token");
  if (!token) return renderLocalTasks();

  try {
    const res = await fetch(`${BASE_URL}/getTasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error();
    const tasks = await res.json();
    renderTasks(tasks);
  } catch {
    renderLocalTasks();
  }
}

async function addTask() {
  const token = localStorage.getItem("token");
  const titleVal = title.value.trim();
  const descVal = desc.value.trim();
  if (!titleVal) return alert("Task title required");

  if (!token) {
    addLocalTask(titleVal, descVal);
    renderLocalTasks();
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/addTask`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title: titleVal, description: descVal }),
    });
    if (!res.ok) throw new Error();
    getTasks();
  } catch {
    addLocalTask(titleVal, descVal);
    renderLocalTasks();
  }
}

async function deleteTask(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    deleteLocalTask(id);
    renderLocalTasks();
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/deleteTask/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error();
    getTasks();
  } catch {
    deleteLocalTask(id);
    renderLocalTasks();
  }
}

// -------- NEW: EDIT TASK -------- //
function openEditModal(task) {
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  modal.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h3 class="text-xl font-semibold mb-4">Edit Task</h3>
      <input id="editTitle" value="${task.title}" class="w-full border p-2 rounded mb-2" />
      <textarea id="editDesc" class="w-full border p-2 rounded mb-2" rows="3">${task.description}</textarea>
      <select id="editStatus" class="border p-2 rounded w-full mb-4">
        <option ${task.status === "Pending" ? "selected" : ""}>Pending</option>
        <option ${task.status === "Completed" ? "selected" : ""}>Completed</option>
      </select>
      <div class="flex justify-end gap-2">
        <button id="saveEdit" class="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
        <button id="cancelEdit" class="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("cancelEdit").onclick = () => modal.remove();

  document.getElementById("saveEdit").onclick = async () => {
    const newTitle = document.getElementById("editTitle").value.trim();
    const newDesc = document.getElementById("editDesc").value.trim();
    const newStatus = document.getElementById("editStatus").value;
    if (!newTitle) return alert("Title cannot be empty");

    await updateTask(task._id || task.id, { title: newTitle, description: newDesc, status: newStatus });
    modal.remove();
  };
}

async function updateTask(id, updatedData) {
  const token = localStorage.getItem("token");

  if (!token) {
    updateLocalTask(id, updatedData);
    renderLocalTasks();
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/updateTask/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) throw new Error();
    getTasks();
  } catch {
    updateLocalTask(id, updatedData);
    renderLocalTasks();
  }
}

// ============ UI RENDERING ============ //
function renderTasks(tasks) {
  const container = document.getElementById("taskList");
  container.innerHTML = "";
  tasks.forEach((t) => {
    container.innerHTML += `
      <div class="bg-white p-3 rounded shadow flex justify-between items-center">
        <div>
          <h3 class="font-semibold">${t.title}</h3>
          <p>${t.description || ""}</p>
          <p class="text-sm text-gray-500">Status: ${t.status}</p>
        </div>
        <div class="space-x-2">
          <button onclick='openEditModal(${JSON.stringify(t)})' class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
          <button onclick="deleteTask('${t._id || t.id}')" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      </div>`;
  });
}

function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}

getTasks();
