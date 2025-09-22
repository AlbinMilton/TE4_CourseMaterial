console.log("Hello, World!");
//Literal
const car = {
  make: "Toyota",
  model: "Camry",
  horsepower: 131,
  color: "red",
  year: 1998,
  fuelType: "gasoline",
  "interior color": "beige", //  if key has space, use quotes
};

console.log(car);
console.log(car.make, car.model);
console.log(car["make"]);
console.log(car["interior color"]); //  if key has space, use bracket notation
delete car.year;
console.log(car);
//Constructor
const person = new Object();
person.name = "Albin";
person.age = 18;
person.profession = "student";

console.log(person);

const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0]);
console.log(array.length);

// EXERCISE 1

//a
const book = {
  title: "Fortnite for Dummies",
  author: "Dale Cooper",
  year: 1899,
};

book.publisher = "Mark S";
console.log(book);

//b
const user = {
  name: "Albin",
  city: "Stockholm",
};
console.log(`Hi im ${user.name} from ${user.city}`);

const arrayy = [
  [(title = "Fortnite 1"), (author = "Dale Cooper"), (year = 1992)],
  [(title = "Fortnite 2"), (author = "Mr.C"), (year = 2017)],
  [(title = "Fortnite 3"), (author = "Dougie"), (year = 2017)],
];
console.log(arrayy[1][0]);

//c
const classroom = {
  teacher: {
    name: "Mr. Smith",
    subject: "Mathematics",
  },
  students: [
    {
      name: "Alice",
      age: 14,
    },
    {
      name: "Bob",
      age: 15,
    },
    {
      name: "Charlie",
      age: 14,
    },
  ],
};

for (const student of classroom.students) {
  console.log(`${student.name} is ${student.age} years old.`);
}
