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


let displayText=""

clear.onclick = () => {
    displayText=""
    display.innerHTML=displayText;
    
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((num) => {
    num.addEventListener('click', () => {
        displayText=displayText.concat(num.id);
        display.innerHTML=displayText;
    });
});

