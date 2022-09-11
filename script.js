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
let shouldResetScreen = true;


function storeValue(a,b){
  firstOperand = a;
  secondOperand = b;
  operands = [firstOperand, secondOperand]
}

storeValue(20, 5)

function add(a,b){
  answer = a + b;
  console.log(answer);
}

add(firstOperand, secondOperand);

function subtract(a,b){
  answer = a - b;
  console.log(answer);
}

subtract(firstOperand, secondOperand);

function multiply(a,b){
  answer = a * b;
  console.log(answer);
}

multiply(firstOperand, secondOperand);

function divide(a,b){
  answer = a / b;
  console.log(answer);
}

divide(firstOperand, secondOperand);

numerals.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => mainDisplay.textContent += value;
});
operators.forEach((button) => {
  let value = button.value;
  button.textContent = button.value;
  button.onclick = () => mainDisplay.textContent += value;
});
clrAndDel.forEach((button) => {
  let value = button.value;
  button.textContent = value.toUpperCase()
  button.onclick = () => mainDisplay.textContent += value;
});