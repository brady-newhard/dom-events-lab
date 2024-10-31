/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let displayValue = "";
let inputOperator = "";
let inputNum1 = "";
let inputNum2 = "";
let result = "";
let clear = "";

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
display.innerText = 0;

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick)

/*-------------------------------- Functions --------------------------------*/

  function handleButtonClick(event) {
    const buttonClicked = event.target.innerText;
    if (!isNaN(buttonClicked)) {
      displayValue += buttonClicked;
      display.innerText = displayValue;
      
    } else if (["+", "-", "/", "*"].includes(buttonClicked)) {
        inputNum1 = displayValue;
        inputOperator = buttonClicked;
        displayValue = "";
    
    } else if (buttonClicked === "=") {
      inputNum2 = displayValue;
      const num1 = parseFloat(inputNum1);
      const num2 = parseFloat(inputNum2);
        
        switch(inputOperator) {
          case "+":
          result = num1 + num2;
          break
        case "-":
          result = num1 - num2;
          break
        case "/":
          result = num1 / num2;
          break
        case "*":
          result = num1 * num2;
          break
        Default:
          return;
        }
        displayValue = result;
        display.innerText = displayValue;
    } else if (buttonClicked === "C") {
        displayValue = clear;
        display.innerText = 0;
      }
  }
});   
