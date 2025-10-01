//Callback function example
const loggedIn = true;

const user = "Cooper";
const welcomeUser = (name = "Guest") => console.log(`Welcome back, ${name}!`);

const welcomeMessage = (user, callback) => {
  if (loggedIn) {
    callback(user);
  } else {
    callback();
  }
};

welcomeMessage(user, welcomeUser);

const helloeverybodymynameisMultiplier = function (factor) {
  return function (number) {
    return factor * number;
  };
};

//Exercise:
//1
const square = (x) => x * x;
console.log(square(4)); // 16
//2

const doHomework = (subject, callback) => {
  console.log(`Finished my ${subject} homework.`);
  callback();
};
function eh() {
  console.log("Sam is Tunahan");
}

doHomework("math", eh);
//3
function multiplier(a, b = 1) {
  return a * b;
}
console.log(multiplier(1));
console.log(multiplier(1, 2));
//4
function maxNumber(...numbs) {
  return Math.max(...numbs);
}
console.log(maxNumber(1, 2, 5));
//5
const fruits = ["apple", "orange", "pear", "banana"];
const newFruit = [...fruits, "mango", "watermelon"];
console.log(newFruit);
