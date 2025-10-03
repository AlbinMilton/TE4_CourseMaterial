const arr1 = [1, 2];
const arr2 = [3, 4];
const combine = [...arr1, ...arr2];
console.log(combine);

for (let i = 0; i < combine.length; i++) {
  console.log(combine[i] * i);
}
for (const item of combine) {
  console.log(item);
}

const multiplied = combine.map((number) => number * 2);
console.log(multiplied);

const triplenumbers = combine.forEach((number) => {
  console.log(number * 3);
});

multiplied.forEach((number) => console.log(number));
const evens = multiplied.filter((n) => n % 2 === 0);
console.log(evens);

const totals = [20, 35, 2500];
const totalPayable = totals.reduce((total, nextItem) => total + nextItem, 0);
console.log(totalPayable);

const trippleArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, { name: "test", id: "jhgk" }, 9],
];
console.log(trippleArr[1][1]);
console.log(trippleArr.flatMap((item) => item));

//Exercise

//1
//a
const movies = [
  "Empire Strikes Back",
  "Silence of the Lambs",
  "The Batman",
  "Mullholland Drive",
  "Interstellar",
];
console.log(movies[1]);

//b
movies.push("Spiderman Across the Spiderverse");
movies.shift();
console.log(movies);

//2
//a
const iHaveanArray = [1, 2, 3, 4, 5];
const iHaveaMultipliedArray = iHaveanArray.map((number) => number * 2);
console.log(iHaveaMultipliedArray);

//b
const odds = iHaveanArray.filter((n) => n % 2 === 1);
console.log(odds);

//3
//a
const array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2d[1][1]);

//b
const bunchofnums = [10, 20, 30, 40, 50];
const totalnums = bunchofnums.reduce((total, nextItem) => total + nextItem, 0);
console.log(totalnums);
