console.log("Hello, World!");

// * For loop example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Number: " + i);
}

// * While loop example
let j = 1;
while (j <= 5) {
  console.log("While Loop Number: " + j);
  j++;
}

// * Do While loop example
let k = 1;
do {
  console.log("Do While Loop Number: " + k);
  k++;
} while (k <= 5);

// * For Of loop example
const items = ["apple", "watermelon", "cherry", "mango", "orange"];
for (const item of items) {
  console.log("My favorite fruit is: " + item);
}

// * Exercise:

// 1
for (let num = 1; num <= 10; num++) {
  console.log("For: " + num);
}
//2
let n = 10;
while (n >= 1) {
  console.log("While: " + n);
  n--;
}
//3
let x = 1;
let sum = null;
do {
  sum = x + sum;
  console.log("Do While: " + sum);
  x++;
} while (sum <= 20);

//4
const classmates = [
  "Lucas",
  "Abi",
  "Michell",
  "Nirari",
  "Erkan",
  "Sam",
  "Tunahan",
  "Erik",
];
for (const classmate of classmates) {
  console.log("Classmate: " + classmate);
}
