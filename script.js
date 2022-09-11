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