console.log("Hello, World!");

let age = 17;
console.log(typeof age);
let hasAticket = true;

if (age >= 18 && hasAticket) {
  console.log("Access granted");
} else if (age >= 18 && !hasAticket) {
  console.log("ticket required");
} else {
  console.log("Access denied, you are a minor");
}

let color = "green";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Cars will crash");
}

//Exercise 1

let secretNumber = 7;
let userGuess = 7;

if (userGuess === secretNumber) {
  console.log("Correct.");
} else if (userGuess > secretNumber) {
  console.log("Too high.");
} else if (userGuess < secretNumber) {
  console.log("Too low.");
} else if (userGuess > 10 || userGuess < 1) {
  console.log("Please enter a number between 1 and 10.");
}

//Exercise 2

let totalSpent = 87;
let discount = null; //null instead of 0 because 0 is a number
if (totalSpent >= 100) {
  console.log("You've spent over $100. You get a 20% discount!");
  discount = 0.8;
  //discount = totalSpent * 0.8;
} else if (totalSpent >= 50 && totalSpent <= 99) {
  console.log("You've spent between $50 and $99. You get a 10% discount!");
  discount = 0.9;
  //discount = totalSpent * 0.9;
} else if (totalSpent < 50) {
  console.log("You've spent less than $50. You get no discount.");
  discount = 1;
  //discount = totalSpent;
}
console.log(`Your final price is ${totalSpent * discount}kr`);
// console.log(`Your final price is ${discount}kr`);

// Calculating BMI (its over)
const mygHeight = 1.85;
const myWeight = 90;

const myBMI = myWeight / mygHeight ** 2;
console.log(`My BMI is ${myBMI.toFixed(2)}%`);
