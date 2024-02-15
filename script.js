const add = (a,b) => {
    if(Number.parseFloat(a) <1 || Number.parseFloat(b) <1){
       return  ((Number.parseFloat(a)*10) + (Number.parseFloat(b)*10)) / 10  /// to fix 0.1+0.2 = 0.3000000000000000004
    }

    return Number.parseFloat(a)+Number.parseFloat(b);
}
const subtract = (a,b) => {
    return Number.parseFloat(a)-Number.parseFloat(b);
}
const multiply = (a,b) => {
    return Number.parseFloat(a) * Number.parseFloat(b);
}

const divide = (a,b) => {
    if (b!==0){
        return Number.parseFloat(a)/Number.parseFloat(b);
    }
    return "Divide by zero error"
}
const mod = (a,b) =>{
    return Number.parseFloat(a) % Number.parseFloat(b);
}


const clearScreen=() =>{
    displayText=""
    display.innerHTML="0";
}

const operate = () =>{
    const operandList=[]
    const operatorList= []
    const operators = document.querySelectorAll(".operator");
    operators.forEach((operator) => {
        operator.addEventListener("click", (event) => {
            operandList.push(Number.parseFloat(displayText));
            displayText="";
            operatorList.push(event.target.id);
            console.log(operatorList)
            console.log(operandList)
        });
    });

    const delBtn=document.querySelector("#delete");
    delBtn.onclick=() =>{
        displayText=displayText.slice(0,displayText.length-1)  ;
        display.innerHTML=displayText;
    }



    const equalBtn=document.querySelector("#equals");

    equalBtn.onclick=() =>{
        operandList.push(Number.parseFloat(displayText));
        let sum=operandList.shift();

        console.log("numbers: ",operandList)
        let shift = operatorList.shift();
        console.log("shift: ",shift)

        while (operandList.length>0) {
            if (shift === "add") {
                sum = add(sum,operandList.shift());
            }
            else if (shift === "subtract") {
                sum = subtract(sum, operandList.shift());
            }
            else if (shift === "*" || shift === "multiply") {
                sum = multiply(sum, operandList.shift());
            }
            else if (shift === "/" || shift=== "divide") {
                sum = divide(sum, operandList.shift());
            }
            else if (shift==="%"){
                sum =mod(sum,operandList.shift());
            }


            console.log("sum:",sum)
        }
        // }
        displayText=sum;
        display.innerHTML=displayText;
    }

}

const display =document.querySelector("#display")
const clear = document.querySelector("#clear");


let displayText=""




clear.onclick = () => {
    clearScreen()
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((num) => {  //// entering the nums on display
    num.addEventListener('click', () => {
        displayText=displayText.concat(num.id);
        display.innerHTML=displayText;
    });
});

operate();