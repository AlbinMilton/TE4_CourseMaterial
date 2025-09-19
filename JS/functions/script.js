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

const calculateAge = (birthYear, currentYear = 2025) => {
  const age = currentYear - birthYear;
  console.log(`You are ${age} years old.`);
};
calculateAge(1990, 2030);

// Early returns
const showTemperature = (temp = 10) => {
  if (temp < 0) {
    return;
    ("freezing");
  }
  if (temp >= 20) {
    return;
    ("cool");
  }
  if (temp > 20 && temp < 32) {
    return;
    ("warm");
  }
  if (temp >= 32) {
    return;
    ("hot");
  }
};

console.log(showTemperature(40));

// Exercise - Grade Calculator
const calculateGrad = (name, grade) => {
  if (grade <= 100 && grade >= 90) {
    return `${name} got a A with score ${grade}`;
  }
  if (grade < 90 || grade >= 80) {
    return `${name} got a B with score ${grade}`;
  }
  if (grade < 80 || grade >= 70) {
    return `${name} got a C with score ${grade}`;
  }
  if (grade < 70 || grade >= 60) {
    return `${name} got a D with score ${grade}`;
  }
  if (grade < 60) {
    return `${name} got a F with score ${grade}`;
  }
  if (grade < 0 || grade > 100) {
    return `Invalid score`;
  }
};

console.log(calculateGrad("Alice", 85));
