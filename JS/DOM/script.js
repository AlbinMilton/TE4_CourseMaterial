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

//event listeners

const button = document.getElementById("button");
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

//Exercise
const box = document.getElementById("box");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "white";
box.style.transition = "all 500ms ease";

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "white";
});

const log = document.getElementById("log");
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  log.textContent = `Key pressed: ${event.key}`;
  const length = event.target.value.length;
  console.log(length);
});
input.addEventListener("keyup", (event) => {
  log.textContent = `Key released: ${event.key}`;
});

//form
const form = document.getElementById("myForm");
const username = document.getElementById("username");
const formLog = document.getElementById("formLog");

form.addEventListener("submit", (event) => {
  if (username.value.length === 0) {
    event.preventDefault();
    formLog.textContent = `Form not submitted`;
  } else {
    formLog.textContent = `Form submitted`;
  }
});

//scroll
const scroll = document.getElementById("scroll-msg");
window.addEventListener("scroll", () => {});

//size
const size = document.getElementById("size");
window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    window.alert("Window is too small!");
  } else {
    console.log("Window size is fine");
  }
});
