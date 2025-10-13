console.log("Hello, World!");

//EXERCISE
//A
//1 & 2
const multiplier = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Not a number");
    console.log(a * b);
  } catch (error) {
    console.log(error.message);
  }
};

multiplier(10, 10);
multiplier(10, "a");

//B

const thing = {
  name: "Albin",
  age: 18,
};
function getUserAge(obj) {
  try {
    if (!obj.age) throw new Error("No Age");
    console.log(obj.age);
  } catch (error) {
    console.log(error.message);
  } finally {
    //C
    console.log("Done checking user");
  }
}

getUserAge(thing);
