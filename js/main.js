let firstNumber;
let secondNumber;
let operation;
let operationTotal = 0;
let doAgain = false;
let history = [];
let result = 0;

do {
  do {
    operation = prompt(
      'Choose operation: +, -, *, division, pow, sin, cos, history', '+' 
    );
  } while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== 'division' && operation !== 'pow' && 
  operation !== 'sin' && operation !== 'cos' && operation !== 'history' && operation !== null);
  
  if (operation === null) {
    break;
  }
  
  if (operation === 'history') {
    let resultHistory = '';

    for (let i = 0; i < history.length; i++) {
      resultHistory += `${i + 1}. ${history[i]}\n`;
    }

    alert(resultHistory.length > 0 ? resultHistory : 'No history');

    doAgain = confirm(
      'Do you want calculations again?\nType OK'
    );

    continue;
  } else if (operation === 'sin' || operation === 'cos') {
    let radians;

    while (isNaN(radians)) {
      radians = +prompt('Radians: ', 0);
    }

    if (operation === 'sin') {
      result = Math.sin(radians);
    } else {
      result = Math.cos(radians);
    }
  } else {
    do {
      firstNumber = +prompt('First number: ', 0);
    } while (isNaN(firstNumber));

    do {
      secondNumber = +prompt('Second number: ', 0);
    } while (isNaN(secondNumber));

    if (operation === '+') {
      result = firstNumber + secondNumber;
    } else if (operation === '-') {
      result = firstNumber - secondNumber;
    } else if (operation === '*') {
      result = firstNumber * secondNumber;
    } else if (operation === 'division') {
      if (secondNumber === 0) {
        result = 'Error';
      } else {
        result = firstNumber / secondNumber;
      }
    } else {
      result = firstNumber ** secondNumber;
    }
  }
  const total = `Operation ${operation} finished with result: ${result}`;
  alert(total);

  history[operationTotal] = total;
  operationTotal++;

  doAgain = confirm(
    'Do you want more calculations?\nType Ok');
} while (doAgain);