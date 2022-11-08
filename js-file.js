let number1 = 0;
let number2 = 0;
let operator = "";
let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let allClear = document.querySelector('.clear');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.equal')

function add() {
    return parseInt(number1)+parseInt(number2);
}

function Subtract() {
    return number1 - number2;
}

function multiply() {
    return number1 * number2;
}

function divide() {
    return number1 / number2;
}

function power() {
    return Math.pow(number1,number2);
}

function operate() {
    switch (operator) {
        case "+" :
             return add();
        case "-" :
            return Subtract();
        case "x" :
            return multiply();
        case "/" :
            return divide();
        case "^" :
            return power();
    }
}

function equal() {
    number2 = display.value;
    console.log(number1,operator,number2)
    display.value = operate();
    number1 = display.value;
}

function displayNumber(event) {
        display.value += event.target.textContent;
}

function storeOperator(event) {
    // if (operator =="") {
    //     number1 = display.value;
    //     operator = event.target.textContent;
    //     display.value = "";
    // }
    // else {
    //     number2 = display.value;
    //     display.value = operate();
    //     number1 = display.value;
    // }
    number1 = display.value;
    operator = event.target.textContent;
    display.value ="";
    console.log(number1, operator);
}

function clear() {
    display.value = '';
    number1 = 0;
    number2 = 0;
    operator = '';
}

numberButtons.forEach(number => number.addEventListener('click',displayNumber))

operatorButtons.forEach(operator => operator.addEventListener('click', storeOperator))

equalButton.addEventListener('click', equal);

allClear.addEventListener('click',clear);



    