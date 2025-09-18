// > HOISTED
greet("Alex");

function greet(name) {
  console.log(`Hello ${name}!`);
}

// > HOISTED
function nameAge(name, age) {
  return `Hello, my name is ${name}, I am ${age} years old.`;
}

console.log(nameAge("John", 30));

// > Not HOISTED
const calcBMI = function (BMIname, height, weight) {
  const bmi = weight / (height * height);
  return `Hello, my name is ${BMIname}, I am ${height}m tall and my weight is ${weight}kg. My BMI is ${bmi.toFixed(
    2
  )}.`;
};

console.log(calcBMI("John", 1.8, 75));

// > Not HOISTED - ARROW FUNCTION
const subtract = (a, b) => a - b;
const sum = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));
