let taskContainerEl = document.getElementById("taskContainer");
let inputEl = document.getElementById("input");
let buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", () => {
  let inputCard = inputEl.value;

  if (inputCard === "") {
    return;
  }

  let taskItemEl = document.createElement("div");
  taskItemEl.classList.add("task-item");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.setAttribute = "for", "label";

  let labelEl = document.createElement("label");
  labelEl.textContent = inputCard;
  labelEl.id = "label";

  let deleteEl = document.createElement("button");
  deleteEl.textContent = "DEL";

  taskItemEl.appendChild(checkBox);
  taskItemEl.appendChild(labelEl);
  taskItemEl.appendChild(deleteEl);
  taskContainerEl.appendChild(taskItemEl);

  deleteEl.addEventListener("click", () => {
    taskContainerEl.removeChild(taskItemEl);
  });

  checkBox.addEventListener("change", () => {
    labelEl.classList.toggle("line", checkBox.checked);
  });

  labelEl.addEventListener("click", () => {
    checkBox.checked = !checkBox.checked;
    labelEl.classList.toggle("line", checkBox.checked);
  });

  inputEl.value = "";
});
