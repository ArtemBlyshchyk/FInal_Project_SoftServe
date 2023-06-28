const poligons = document.querySelectorAll(".trello__body > div");
let trelloTask = document.querySelector(".trello__task");
const trelloRremoveTaskBtn = document.querySelector(".trello__removeTaskBtn");
const trelloSprint = document.querySelector(".trello__sprint");
const trelloInp = document.querySelector(".trello__inp");
const trelloBtn = document.querySelector(".trello__btn");
let newTrelloTask;
const usersPoligon = document.querySelector(".user__avatars");
const userAvatar = document.querySelectorAll(".user__avatars > img");
const addDevBtn = document.querySelector(".avatarBtn");
let dragElement;

usersPoligon.addEventListener("dragover", allowDrop);
trelloTask.addEventListener("dragover", allowDrop);
usersPoligon.addEventListener("drop", dropElement);
trelloTask.addEventListener("drop", dropElement);

function dropElement() {
  this.appendChild(dragElement);
}
userAvatar.forEach(function (elem) {
  elem.addEventListener("dragstart", function (e) {
    dragElement = e.target;
  });
  elem.addEventListener("dblclick", function () {
    usersPoligon.appendChild(this);
  });
  addDevBtn.addEventListener("click", function () {
    elem.classList.remove("hide");
  });
});

poligons.forEach(function (el) {
  el.addEventListener("dragover", allowDrop);
  el.addEventListener("drop", dropTask);
});

trelloRremoveTaskBtn.addEventListener("click", removeTask);
function removeTask() {
  this.parentElement.remove();
}

trelloBtn.addEventListener("click", addTask);
function addTask() {
  if (trelloInp.value) {
    const trelloTask = document.createElement("div");
    trelloTask.addEventListener("dragstart", function (e) {
      newTrelloTask = e.target;
    });
    trelloTask.classList.add("trello__task");
    trelloTask.innerText = trelloInp.value;
    trelloTask.setAttribute("contenteditable", "true");
    const trelloRremoveTaskBtn = document.createElement("span");
    trelloRremoveTaskBtn.innerText = "x";
    trelloRremoveTaskBtn.classList.add("trello__removeTaskBtn");
    trelloTask.appendChild(trelloRremoveTaskBtn);
    trelloSprint.appendChild(trelloTask);
    trelloRremoveTaskBtn.addEventListener("click", removeTask);
    trelloTask.setAttribute("draggable", "true");
    trelloTask.addEventListener("dragover", allowDrop);
    trelloTask.addEventListener("drop", dropElement);
    trelloInp.value = "";
  }
}
trelloTask.addEventListener("dragstart", function (e) {
  newTrelloTask = e.target;
});

function allowDrop(e) {
  e.preventDefault();
}
function dropTask() {
  this.appendChild(newTrelloTask);
}
