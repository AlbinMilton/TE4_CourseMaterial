const h1 = document.getElementById("heading");
console.log(h1.innerText);
h1.innerText = "Hello from JavaScript!";

const msg = document.querySelector(".message");
console.log(msg.textContent);

const headings = document.querySelectorAll(".item");
for (const heading of headings) {
  console.log(heading.textContent);
}

//list manipulation
const list = document.querySelector("ul");
const newlistItem = document.createElement("li");

newlistItem.textContent = "4";
newlistItem.classList.add("list-item");
list.appendChild(newlistItem);

const listItems = document.querySelectorAll(".list-item");
for (const item of listItems) {
  item.style.color = "blue";
}
console.log(listItems);

//remove element
const rmrf = document.querySelector(".box");
rmrf.remove();

//event listeners

//button creation
const button = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(button);

button.innerText = "Click Me";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

button.addEventListener("click", () => {
  window.alert("Button Clicked!");
  console.log("Clicked!");
  button.style.width = "300px";
  button.style.backgroundColor = "lightpink";
});

//box creation with hover effect
const box = document.createElement("div");
body.appendChild(box);
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "red";
box.style.transition = "all 500ms ease";

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "red";
});

//Input keydown + keyup
const log = document.getElementById("log");
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  log.textContent = `Key pressed: ${event.key}`;
  if (event.key === "å" || event.key === "ä" || event.key === "ö") {
    window.alert("Forbidden key pressed!");
  }
});
input.addEventListener("keyup", (event) => {
  log.textContent = `Key released: ${event.key}`;
});

const form = document.getElementById("myForm");
const formLog = document.getElementById("formLog");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  formLog.textContent = `Form submitted`;
});

//Exercise
