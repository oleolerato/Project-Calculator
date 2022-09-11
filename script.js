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

function add(a,b){
  answer = a + b
  console.log(answer)
}

add(2,2)

function subtract(a,b){
  answer = a - b
  console.log(answer)
}

subtract(10, 5)

function multiply(a,b){
  answer = a * b
  console.log(answer)
}

multiply(6, 2)

function divide(a,b){
  answer = a / b
  console.log(answer)
}

divide(24,2)

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