const subDisplay = document.querySelector('.subDisplay');
const mainDisplay = document.querySelector('.mainDisplay');
const numerals = document.querySelectorAll('.numerals button');
const operators = document.querySelectorAll('.operators button');
const clrAndDel = document.querySelectorAll('.clearAndDel button');

let currentOperation = 'none';
let firstOperand = 0;
let secondOperand = 0;
let operands = [firstOperand, secondOperand];
let answer = 0;
let shouldClearDisplay = true;

function checkClearDisplay(){
  if(shouldClearDisplay == true){
    mainDisplay.textContent = "";
    shouldClearDisplay = false;
  }
}

let textValue = '';
let convertedValue = 0;

function displayText(a){
  checkClearDisplay();
  mainDisplay.textContent += a;
  switch(a){
    case "+": 
      convertValue();
      operate('+');
    break;
    case "-": 
      convertValue();
    break;
    case "×": 
      convertValue();
    break;
    case "÷": 
      convertValue();
    break;
    case "=": 
      convertValue();
    break;
  }
}

let changeOperand = false;

function convertValue(){
    textValue = mainDisplay.textContent.slice(0,-1);
    mainDisplay.textContent = '';
    shouldClearDisplay = true;
    convertedValue = +textValue;
    storeValues(convertedValue);
}


function storeValues(a){
  if(changeOperand == false){
    firstOperand = a;
    operands[0] = firstOperand;
    console.log(operands);
    changeOperand = true;
  } else if (changeOperand == true){
    secondOperand = a;
    operands[1] = secondOperand;
    console.log(operands);
    changeOperand = false;
  }
}

function add(a,b){
  answer = a + b;
  console.log(answer);
}

function subtract(a,b){
  answer = a - b;
  console.log(answer);
}

function multiply(a,b){
  answer = a * b;
  console.log(answer);
}

function divide(a,b){
  answer = a / b;
  console.log(answer);
}

function operate(a){
  switch(a){
    case "+": add(operands[0], operands[1]);
    break;
    case "-": subtract(operands[0], operands[1]);
    break;
    case "x": multiply(operands[0], operands[1]);
    break;
    case "÷": divide(operands[0], operands[1]);
    break;
  }
}


numerals.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => displayText(value);
});
operators.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => displayText(value);
});
clrAndDel.forEach((button) => {
  let value = button.value;
  button.textContent = value.toUpperCase();
  button.onclick = () => displayText(value);
});