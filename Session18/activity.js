let num1 = 0;
let num2 = 0;

function startCalc(){
    let userInput = parseInt(prompt("Please select an action: \n [1] Input Numbers \n [2] Sum\n [3] Difference \n [4] Product \n [5] Quotient\n [6] Reset"));
    
    switch (userInput){
        case 1:
            enterNumbers();
            break;
        case 2:
            sum();
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
        default:
            alert("Invalid option. Please try again.");
    }
    startCalc(); 
}

function enterNumbers(){
    let inputNum1 = parseInt(prompt("Enter first number."));
    let inputNum2 = parseInt(prompt("Enter second number."));
    num1 = inputNum1;
    num2 = inputNum2;
    alert("Numbers saved!");
}

function sum(){
    if(num1 == 0 && num2 == 0){
        alert("Please enter numbers first (option 1).");
    } else {
        let result = num1 + num2;
        alert(`The Sum of ${num1} and ${num2} is ${result}`);
    }
}

function difference(){
    if(num1 == 0 && num2 == 0){
        alert("Please enter numbers first (option 1).");
    } else {
        let result = num1 - num2;
        alert(`The Difference of ${num1} and ${num2} is ${result}.`);
    }
}

function product(){
    if(num1 == 0 && num2 == 0){
        alert("Please enter numbers first (option 1).");
    } else {
        let result = num1 * num2;
        alert(`The Product of ${num1} and ${num2} is ${result}.`);
    }
}

function quotient(){
    if(num1 == 0 && num2 == 0){
        alert("Please enter numbers first (option 1).");
    } else if(num2 == 0) {
        alert("Cannot divide by zero!");
    } else {
        let result = num1 / num2;
        alert(`The Quotient of ${num1} and ${num2} is ${result}.`);
    }
}

function reset(){
    num1 = 0;
    num2 = 0;
    alert("Calculator reset!");
}

startCalc();
