const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
LoadTasks();

function AddTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
    return;
  }

  let li = document.createElement("LI");
  li.innerHTML = inputBox.value;

  let span = document.createElement("SPAN");
  span.innerHTML = "\u00D7";

  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  SaveTasks();
}

listContainer.addEventListener("click", (e) => {
  let element = e.target;

  if (element.tagName === "LI") {
    element.classList.toggle("checked");
    SaveTasks();
  } else if (element.tagName === "SPAN") {
    element.parentNode.remove();
    SaveTasks();
  }
});

function SaveTasks() {
  localStorage.setItem("task", listContainer.innerHTML);
}

function LoadTasks() {
  listContainer.innerHTML = localStorage.getItem("task");
}

inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    AddTask();
  }
}
);
