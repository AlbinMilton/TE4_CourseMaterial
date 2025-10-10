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
async function retryFetch(url, retries = 3, backoffMs = 500) {
  let attempts = 0;
  while (attempts <= retries) {
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");
      return res;
    } catch (error) {
      if (attempts === retries) throw error;
      await wait(backoffMs * (attempts + 1));
    }
    attempts++;
  }
}

const demoRetryFetch = async () => {
  try {
    const res = await retryFetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await res.json();
    console.log(`Success after`, data);
  } catch (error) {
    console.log(error.message);
  }
};

const fetchpostfirstandfirstcomment = async () => {
  try {
    const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!postRes.ok) throw new Error(`HTTP code ${postRes.status}`);
    const posts = await postRes.json();
    const firstPost = posts[0];

    const commentRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${firstPost.id}`
    );
    if (!commentRes.ok) throw new Error(`HTTP code ${commentRes.status}`);
    const comments = await commentRes.json();

    console.log(`First post ${firstPost}`);
    console.log(`Comments for First post ${comments.slice(0, 3)}`);
  } catch (error) {
    console.log("fa");
  }
};
