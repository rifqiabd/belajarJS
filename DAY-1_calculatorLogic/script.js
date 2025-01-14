/* 
===============
DAY 1
===============

Learn calculator tutorial from chatgpt, and learn how to write code. This because i can read the code, but can't write 😭

So i actually ask to chatgpt, "Bro i can read a code, but i can't write that. So it's kinda funny right"

And chatgpt answer "Bro, just write small project something like calculator and etc". So i do find a calculator UI, and learn to give some logic in this calculator.

Before this script, this calculator using an inline javascript. so i have idea to make this calculator using external source that using script.js from parent folder.

So, its interesting to me and chatgpt give me how to write clean code too.



*/

// Initiation UI Components
const history = document.getElementById("history");
const display = document.getElementById("calcDisplay");
const buttons = document.querySelectorAll(".num");

// initiation for validation
let calculated = false;

// Looping for adding addEventListener into buttons, and adding logic there
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    const action = button.getAttribute("data-action");
    const operation = button.getAttribute("data-operation");

    // clear
    if (action == "clear") {
      display.value += "";
    } 
    
    else if (["multiply", "divide", "add", "subtract"].includes(operation)) {
      calculated = false;
      console.log(calculated);
      display.value += value;
    }
    
    // calculation
    else if (action == "calculate") {
      display.value = eval(display.value);
      calculated = true;
      console.log(calculated);
    }

    // number and operator button
    else {
      if (calculated) {
        display.value = '';
      } else {
        display.value += value;
        history.value += value;
      }
      calculated = false;
      console.log(calculated);
    }
  });
});
