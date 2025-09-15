let name = "Albin";
let age = 18;
let student = true;

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof student, student);

age = age + 1;
console.log(age);
student = false;
console.log(student);

let introduction = `Hello, my name is ${name}, I am ${age} years old.`;
if (student === true) {
  console.log((introduction += " I am a student."));
} else {
  console.log((introduction += " I am not a student."));
}
