const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const button = document.getElementById("Button");
const div = document.querySelector(".box");
div.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button inside div was clicked!");
    return;
  }
  console.log("Div was clicked!");
});
