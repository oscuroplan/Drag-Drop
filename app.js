const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

// dragstart реагирует на начало перетаскивания
item.addEventListener("dragstart", dragstart);
// dragend реагирует на окончание перетаскивания
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  //   console.log(placeholder);
  // dragover вызывается когда мы находимся над элементом в который мы можем поместить
  placeholder.addEventListener("dragover", dragover);
  // dragenter когда мы заходим на территорию элемента
  placeholder.addEventListener("dragenter", dragenter);
  // dragleave когда перетащили на элемент, но вышли
  placeholder.addEventListener("dragleave", dragleave);
  // drop когда отпустили элемент
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  //   console.log("drag start", event.target);
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  //   console.log("drag end");
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  //   console.log("drag over");
  event.preventDefault();
}
function dragenter(event) {
  console.log("drag enter");
  event.target.classList.add("hovered");
}
function dragleave(event) {
  console.log("drag leave");
  event.target.classList.remove("hovered");
}
function dragdrop(event) {
  console.log("drag drop");
  event.target.append(item);
  event.target.classList.remove("hovered");
}
