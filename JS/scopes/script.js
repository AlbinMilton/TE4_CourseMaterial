console.log("Hello, World!");
const global = "I am a global variable";

const repeatVar = () => {
  const scoped = "I am a scoped variable";
  console.log(global);
};

repeatVar();

//Exercise
//1

//a och b
function makeMultiplier(factor) {
  const num = 10;
  function markeplier() {
    return num * factor;
  }
  return markeplier();
}
console.log(makeMultiplier(5));

//2
console.log("//2");

const counter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    reset: () => {
      count = 0;
      return count;
    },
  };
};
const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.reset());
console.log(myCounter.increment());
