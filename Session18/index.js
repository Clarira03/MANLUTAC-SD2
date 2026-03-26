// console.log("Hello World!");

//[SECTION] JS Functions
// Performs specific tasks and eliminate repeatetive codes
// SYNTAX: function functionName(parameter){//code block}

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");



function sayHello(){
    console.log("Hello, San Fernando City, Pampanga!");
}

// Invocation/Invoke or Funciton Calling
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

function showAlert(){
    alert("Hello, User!");
}

let num1 = 0, num2 = 0;

function startCalc(){
    let userInput = parseInt(prompt("Please select an action: \n[1] Input Numbers\n[2] Sum\n[3] Difference\n[4] Product\n[5] Quotient \n[6] Reset"));

    switch (userInput){
        case 1:
            enterNumbers();
            break;
        case 2:
            sum(); 
            break;
    }
}