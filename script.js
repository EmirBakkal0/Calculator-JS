const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}
let number;
let operator;
let number2;

const operate = (number,operator,number2) =>{
    switch (operator){
        case "+":
            return add(number,number2);

        case "-":
            return subtract(number,number2);

        case "*":
            return multiply(number,number2);

        case "/":
            return divide(number,number2)
    }
}

const display =document.querySelector("#display")
const clear = document.querySelector("#clear");

clear.onclick = () => {
    display.innerHTML=""
}

