let number1 = 0;
let number2 = 0;
let operator = "";
let secondoperator = false;
let waitForNumber2 = false;
let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let allClear = document.querySelector('.clear');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.equal')
const del = document.querySelector('.del');

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

function equal() {
    console.log('hi')
    if (secondoperator===false) number2 = display.value;
    console.log(number1,operator,number2)
    display.value = operate();
    number1 = display.value;
    secondoperator = true;
    waitForNumber2 = false;
}

function displayNumber(event) {
    if (secondoperator===false) display.value += event.target.textContent;
    else {
        display.value = "";
        secondoperator=false;
        display.value += event.target.textContent;
    }
    
}

function storeOperator(event) {
    if (waitForNumber2) {
        equal() ;
        operator = event.target.textContent;
    }
    else {
        number1 = display.value;
        operator = event.target.textContent;
        waitForNumber2 = true
        display.value ="";
    }

    
}

function clear() {
    display.value = '';
    number1 = 0;
    number2 = 0;
    operator = '';
    waitForNumber2= false;
    secondoperator= false;
}

function keyboarSupport(event) {
    console.log(event.key)
    if (isFinite(event.key) || event.key ===".") {
        if (secondoperator===false) display.value += event.key;
        else {
            display.value = "";
            secondoperator=false;
            display.value += event.key;
        }
    }
    else if (event.key.match(/[-+-/*]/) ) {
        if (waitForNumber2) {
            equal() ;
            operator = event.key;
        }
        else {
            number1 = display.value;
            operator = event.key;
            waitForNumber2 = true
            display.value ="";
        }
    }
    else if (event.key=== 'Backspace') display.value = display.value.slice(0,-1);
    else if (event.key=== 'Enter') equal();
    else if (event.key === 'Escape') clear();
    else return;
}

numberButtons.forEach(number => number.addEventListener('click',displayNumber))

operatorButtons.forEach(operator => operator.addEventListener('click', storeOperator))

equalButton.addEventListener('click', equal);

allClear.addEventListener('click',clear);

del.addEventListener('click', () => display.value = display.value.slice(0,-1))

window.addEventListener('keydown',keyboarSupport)



    