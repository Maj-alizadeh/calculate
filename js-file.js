let number1 = 0;
let number2 = 0;
let operator = "";
let secondoperator = false;
let gotNumber2 = false;

const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const allClear = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal')
const del = document.querySelector('.del');

window.addEventListener('keydown',keyboarSupport)
numberButtons.forEach(number => number.addEventListener('click',() => displayNumber(number.textContent)))
operatorButtons.forEach(operator => operator.addEventListener('click',() => storeOperator(operator.textContent)))
equalButton.addEventListener('click', equal);
allClear.addEventListener('click',clear);
del.addEventListener('click', () => display.value = display.value.slice(0,-1))


function add() {
    return parseFloat(number1)+parseFloat(number2);
}

function Subtract() {
    return parseFloat(number1)- parseFloat(number2);
}

function multiply() {
    return parseFloat(number1)* parseFloat(number2);
}

function divide() {
    return parseFloat(number1)/ parseFloat(number2);
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
        case "*":
            return multiply();
        case "/" :
            if (number2 ==0) return " you can't divide by zero!"
            return divide();
        case "^" :
            return power();
    }
}

function displayValue(input,clearScreen) {
    if (clearScreen) display.value = ""
    display.value += input;
}

function equal() {
    if (secondoperator===false) number2 = display.value;
    displayValue(operate(),true) 
    number1 = display.value;
    secondoperator = true;
}


function displayNumber(target) {
    //target = event.target.textContent
    if (secondoperator===false) displayValue(target,false);
    else {
        secondoperator=false;
        displayValue(target,true);
    }
    
}

//if number2 is available call equal() and calculate the operation
function storeOperator(target) {
    if (gotNumber2) {
        equal() ;
        operator = target;
    }
    else {
        number1 = display.value;
        operator = target;
        gotNumber2 = true
        display.value ="";
    }
}



function clear() {
    display.value = '';
    number1 = 0;
    number2 = 0;
    operator = '';
    gotNumber2= false;
    secondoperator= false;
}

function keyboarSupport(event) {
    console.log(event.key)
    if (isFinite(event.key) || event.key ===".") displayNumber(event.key);
    else if (event.key.match(/[-+/*]/) ) storeOperator(event.key);
    else if (event.key=== 'Backspace') display.value = display.value.slice(0,-1);
    else if (event.key=== 'Enter') equal();
    else if (event.key === 'Escape') clear();
    else return;
}









    