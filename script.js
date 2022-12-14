const subDisplay = document.querySelector('.subDisplay');
const mainDisplay = document.querySelector('.mainDisplay');
const numerals = document.querySelectorAll('.numerals button');
const operators = document.querySelectorAll('.operators button');
const clrAndDel = document.querySelectorAll('.clearAndDel button');

let currentOperation = '=';
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
  if(a == '(-)'){
    mainDisplay.textContent += "-"
  } else{
    mainDisplay.textContent += a;
  }
  switch(a){
    case "+": 
      convertValue();
      operate('+');
      subDisplay.textContent = `${answer} + `;
    break;
    case "-": 
      convertValue();
      operate('-');
      subDisplay.textContent = `${answer} - `;
    break;
    case "×": 
      convertValue();
      operate('×');
      subDisplay.textContent = `${answer} × `;
    break;
    case "÷": 
      convertValue();
      operate('÷');
      subDisplay.textContent = `${answer} ÷ `;
    break;
    case "=": 
      convertValue();
      operate('=');
      subDisplay.textContent = `${answer}`;
    break;
    case "delete":
      mainDisplay.textContent = mainDisplay.textContent.slice(0,-7);
    break;
    case "clear":
      clear();
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

let i = 0;

function storeValues(a){
  if(changeOperand == false && i == 0){
    firstOperand = a;
    operands[0] = firstOperand;
    changeOperand = true;
  } else if (changeOperand == true){
    secondOperand = a;
    operands[1] = secondOperand;
    if(i > 0){
      changeOperand = true;
    } else {
    changeOperand = false;
    }
  }
}

function add(a,b,c){
  if (i >= 1){
    c += b;
    answer = c;
    operands[0] = answer;
  } else{
  answer = a + b;
  }
}

function subtract(a,b,c){
 if (i >= 1){
    c -= b;
    answer = c;
    operands[0] = answer;
  } else{
  answer = a - b;
  }
}

function multiply(a,b,c){
  if (i >= 1 && b !== 0){
    c *= b;
    answer = c;
    operands[0] = answer;
  } else if(b == 0 ){
    answer = a * 1;
  }else{
  answer = a * b;
  }
}

function divide(a,b,c){
  if (i >= 1 && b !== 0){
    c /= b;
    answer = c;
    operands[0] = answer;
  } else if(b == 0){
    answer = a / 1;
  } else{
  answer = a / b;
  }
}

function operate(a){
  let holdAnswer = answer;
  switch(a){
    case "+": 
      add(operands[0], operands[1], holdAnswer);
      currentOperation = "+";
    break;
    case "-": 
      subtract(operands[0], operands[1], holdAnswer);
      currentOperation = "-";
    break;
    case "×": 
      multiply(operands[0], operands[1], holdAnswer);
      currentOperation = "×";
    break;
    case "÷": 
      divide(operands[0], operands[1], holdAnswer);
      currentOperation = "÷";
    break;
    case "=":
      switch (currentOperation){
        case "+": 
          add(operands[0], operands[1], holdAnswer);
        break;
        case "-": 
          subtract(operands[0], operands[1], holdAnswer);
        break;
        case "×": 
          multiply(operands[0], operands[1], holdAnswer);
        break;
        case "÷": 
          divide(operands[0], operands[1], holdAnswer);
        break;
        case "=": 
            if(i < 1){
            answer = operands[0];
          } else {
            answer = operands[1];
          }
        break;
      }
  }
  i++;
  mainDisplay.textContent = answer
}

function clear(){
mainDisplay.textContent = '';
subDisplay.textContent = '';
currentOperation = 'none';
firstOperand = 0;
secondOperand = 0;
operands = [firstOperand, secondOperand];
answer = 0;
shouldClearDisplay = true;
textValue = '';
convertedValue = 0;
changeOperand = false;
i = 0;
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