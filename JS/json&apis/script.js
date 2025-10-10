"use strict";
console.log("Hello, World!");

//----------------------------------------------------------------

// const postsList = document.getElementById("posts");
// const errorMessage = document.getElementById("error-message");
// const fetchPosts = async () => {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/posts_limit=5"
//     );
//     if (res.status === 404) {
//       errorMessage.textContent = `Error fetching data ${res.status} Not Found!
//         Maybe check the end point `;
//       errorMessage.style.color = "red";
//       errorMessage.style.fontWeight = "bold";
//       return;
//     }
//     const data = await res.json();
//     console.log(data);

//     data.forEach((item) => {
//       const listItem = document.createElement("li");
//       const postTitle = document.createElement("h2");
//       const postBody = document.createElement("p");
//       postTitle.textContent = item.title;
//       postTitle.style.fontSize = "1rem";
//       postBody.textContent = item.body;

//       listItem.appendChild(postTitle);
//       listItem.appendChild(postBody);
//       postsList.appendChild(listItem);
//       postsList.style.width = "300px";
//       postsList.style.height = "300px";
//     });
//   } catch (error) {
//     errorMessage.textContent = error.message;
//   }
// };
// fetchPosts();

//------------------------------------------------------------------

// const jsonString = `{
// "name": "John",
// "age": 12,
// "school": "NTI"
// }`;
// localStorage.setItem("person", jsonString);
// const dataFromLocalStorage = localStorage.getItem("person");
// const parsedLocal = JSON.parse(dataFromLocalStorage);

// console.log(parsedLocal);

// // ! Stringify

// const classObj = {
//   name: "te4",
//   course: "JS",
//   students: [
//     {
//       name: "Alice",
//       age: 19,
//     },
//     {
//       name: "Bob",
//       age: 18,
//     },
//   ],
// };
// console.log(classObj);
// const jsonClass = JSON.stringify(classObj);
// console.log(jsonClass);

//------------------------------------------------------------------

//Exercise
// A
const studentJSON = `{"name": "Liam", "grade": 4, "passed": true}`;
const studentObj = JSON.parse(studentJSON);
console.log(studentObj.name);

//back to JSON
const backToJSON = JSON.stringify(studentObj);
console.log(backToJSON);

// B
const users = document.getElementById("users");
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);

    data.forEach((item) => {
      const dataList = document.createElement("li");
      const userName = document.createElement("p");
      const userEmail = document.createElement("p");

      userName.textContent = item.name;
      userEmail.textContent = item.email;
      dataList.textContent = `Name: ${userName.textContent}.____Email:  ${userEmail.textContent}`;

      users.appendChild(dataList);
    });
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
fetchUsers();

// C
const quotes = document.getElementById("quotes");
const quoteBtn = document.getElementById("fetch-quote");

const fetchQuote = async () => {
  try {
    const res = await fetch("http://api.quotable.io/random");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    console.log(data.content);
    quotes.textContent = `${data.content} --${data.author}`;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
quoteBtn.addEventListener("click", fetchQuote);
