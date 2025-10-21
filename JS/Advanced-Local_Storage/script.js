// const myFruits = ["Apple", "Banana", "Cherry"];
// const stringifiedFruits = JSON.stringify(myFruits);
// console.log(stringifiedFruits);

// localStorage.setItem("fruits", stringifiedFruits);
// // localStorage.removeItem("fruits");
// // localStorage.clear();

// const session = "test@me.com";
// sessionStorage.setItem("email", session);

// const loggedInUser = {
//   name: "Leon Kennedy",
//   city: "Racoon City",
//   age: 21,
// };

// const stringUser = JSON.stringify(loggedInUser);
// localStorage.setItem("user", stringUser);
// const userFromLocal = localStorage.getItem("user");
// const parsedUser = JSON.parse(userFromLocal);
// console.log(parsedUser.name);
// const button = document.getElementById("btn");

// const toggleTheme = () => {
//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// };
// button.addEventListener("click", toggleTheme);

// window.addEventListener("load", () => {
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark");
//   }
// });

// const form = document.querySelector("form");
// const input = document.querySelector("#username");

// input.value = sessionStorage.getItem("username") || "";

// input.addEventListener("input", (e) => {
//   sessionStorage.setItem("username", input.value);
// });

// window.addEventListener("storage", (e) => {
//   console.log("Key changed:", e.key);
//   console.log("New value:", e.newValue);
// });

//Exercise A
//1

const myName = "Albin";
localStorage.setItem("name", myName);
const nameOnPage = document.getElementById("headerName");
nameOnPage.textContent = `Name: ${localStorage.getItem("name")}`;
document.body.appendChild(nameOnPage);

//2
const rmvbutton = document.getElementById("btnName");
rmvbutton.textContent = "Remove";
document.body.appendChild(rmvbutton);
rmvbutton.addEventListener("click", () => {
  localStorage.removeItem("name");
  nameOnPage.textContent = "Name removed";
});

//Exercise B
const button = document.getElementById("themeBtn");

const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
button.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

const form = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const list = document.getElementById("itemList");
const create = document.getElementById("btn");

create.addEventListener("click", (e) => {
  if (itemInput.value === "") return;
  e.preventDefault();
  const listItem = document.createElement("li");
  listItem.textContent = `Task: ${itemInput.value}`;
  list.appendChild(listItem);
});
