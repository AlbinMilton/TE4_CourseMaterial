"use strict";

// function logMessage(message) {
//   console.log(message);
// }

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

//fetchData(logMessage);

// let promise = new promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(() => console.log("Received"));
//     reject(() => console.log("Error"));
//   });
// });

//Exercise
//A
//1
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function greetLater() {
  await wait(3000);
  console.log("Hello Async World");
}
greetLater();

//2
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Oops error =>", error);
  }
}
getData();

//B
//1
async function loadData() {
  const [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((r) =>
      r.json()
    ),
  ]);
  console.log(user, posts);
}
loadData();

//2
//Write a function that retries fetching the load data up to 3 times if the fetch fails.
async function retryFetch(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error("Fetch failed");
      let data = await response.json();
      return data;
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}
