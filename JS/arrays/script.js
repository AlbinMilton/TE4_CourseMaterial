// Exercise 1

//a
const colours = ["red", "blue", "green"];
console.log(`${colours[0]},${colours[2]}`);

//b
colours.push("yellow");
console.log(colours);

//c
colours.shift([0]);
console.log(colours);

// Exercise 2

//a
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

//b
for (const number of numbers) {
  console.log(number * 2);
}

//Exercise 3

let shoppingCart = ["milk", "eggs", "flour", "juice", "steering wheel"];
shoppingCart.unshift("bread");
shoppingCart.push("chocolate");
shoppingCart.splice(2, 1);
console.log(shoppingCart.includes("milk"));
console.log(shoppingCart);
