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

function convertValue(){
    textValue = mainDisplay.textContent.slice(0,-1);
    mainDisplay.textContent = '';
    shouldClearDisplay = true;
    convertedValue = +textValue
}


function storeValues(a,b){
  firstOperand = a;
  secondOperand = b;
  operands = [firstOperand, secondOperand];
}

storeValues(20, 5)

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

numerals.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => displayText(value)
});
operators.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => displayText(value)
});
clrAndDel.forEach((button) => {
  let value = button.value;
  button.textContent = value.toUpperCase()
  button.onclick = () => displayText(value)
});