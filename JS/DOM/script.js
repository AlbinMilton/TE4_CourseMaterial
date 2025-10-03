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
  event.preventDefault();
  if (username.value.length === 0) {
    formLog.textContent = `Form not submitted`;
  } else {
    formLog.textContent = `Form submitted`;
  }
});

//scroll
const scroll = document.getElementById("scroll-msg");
scroll.style.height = "10px";
scroll.style.width = "0%";
scroll.style.border = "1px solid black";
scroll.style.position = "fixed";
scroll.style.backgroundColor = "blue";
scroll.style.top = "0";
scroll.style.left = "0";
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scroll.style.width = `${scrollPercent}%`;
});

//size
const size = document.getElementById("size");
window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    window.alert("Window is too small!");
  } else {
    console.log("Window size is fine");
  }
});
