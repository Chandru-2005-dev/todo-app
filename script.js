let taskContainerEl = document.getElementById("taskContainer");
let inputEl = document.getElementById("input");
let buttonEl = document.getElementById("button");


// LocalStorage-la irundhu tasks edukkrom
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Task create panna function
function createTask(task) {

  let taskItemEl = document.createElement("div");
  taskItemEl.classList.add("task-item");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = task.completed;

  let labelEl = document.createElement("label");
  labelEl.textContent = task.text;

  let deleteEl = document.createElement("button");
  deleteEl.textContent = "DEL";


  // Task already completed-na line varum
  if (task.completed) {
    labelEl.classList.add("line");
  }


  taskItemEl.appendChild(checkBox);
  taskItemEl.appendChild(labelEl);
  taskItemEl.appendChild(deleteEl);

  taskContainerEl.appendChild(taskItemEl);


  // Delete task
  deleteEl.addEventListener("click", () => {

    taskItemEl.remove();

    tasks = tasks.filter((item) => item.id !== task.id);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });


  // Checkbox change
  checkBox.addEventListener("change", () => {

    task.completed = checkBox.checked;

    labelEl.classList.toggle("line", checkBox.checked);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });


  // Label click
  labelEl.addEventListener("click", () => {

    checkBox.checked = !checkBox.checked;

    task.completed = checkBox.checked;

    labelEl.classList.toggle("line", checkBox.checked);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
}


// Add button click
buttonEl.addEventListener("click", () => {

  let inputCard = inputEl.value.trim();

  if (inputCard === "") {
    return;
  }


  let newTask = {
    id: Date.now(),
    text: inputCard,
    completed: false
  };


  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(newTask);

  inputEl.value = "";
});


// Page refresh aagumbothu tasks display aagum
tasks.forEach((task) => {
  createTask(task);
});
