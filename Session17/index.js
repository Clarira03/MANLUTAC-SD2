//console.log("")
//console.log("Hello World");

// [Section] Repetition Control Structure
// While loop
/* 
SYNTAX:
while(condition){
    // code block
    // iteration 
}
*/ 

let count = 0;
while(count < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}

/**
>> FIRST ITERATION <<

let count = 0;
while( 0 < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}
RESULT -> DO LOOP: 0

>> SECOND ITERATION <<
let count = 1;
while( 1 < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}
RESULT -> DO LOOP: 1

>> THIRD ITERATION <<
let count = 2;
while( 1 < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}
RESULT -> DO LOOP: 2

>> FOURTH ITERATION <<
let count = 3;
while( 1 < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}
RESULT -> DO LOOP: 3

>> FIFTH ITERATION <<
let count = 4;
while( 1 < 5 ){
    console.log("DO LOOP: "+ count);
    count++;
}
RESULT -> DO LOOP: 4


>> SIXTH ITERATION <<
let count = 5;
while( 1 < 5 ){
    console.log("DO LOOP: "+ 5);
    count++;
}
RESULT -> DO LOOP: 5

 */

// Do-While
/**
SYNTAX
do{
//code block
// iteration

}

 */

let score = 0 
do{
    console.log("DO-WHILE LOOP: " + score);
    score++;
}while (score < 5); 

// For Loop
/*
SYNTAX:
for(initialization; condition; iterator){
    //code block
}

*/

for(let i = 0; i < 5; i++){
    console.log("FOR-LOOP:" + i)
}


for( let i = 0; i< 10; i++){
    if(i % 3 == 0){
        console.log("COUNT:" + i + "- Divisible by 3");
    }else{
        console.log("COUNT:" + i);
    }
}

// continue - break

for(let count = 0; count< 20; count++){
    if( count == 18){
        break;
    }
    console.log("COUNT:" + count);
}

for(let count = 0; count< 20; count++){
    if( count == 15){
        console.log("Hello its me : " + count);
        continue;
    }
    console.log("COUNT" + count);
}

let isRunning = true;
let isAccountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning){
    if(isAccountLocked !=3){
        let input = prompt ("Please Enter your Password. ");
        if(input != password){
            console.log("Incorrect Password.  Chance ", 2-isAccountLocked);
            isAccountLocked++
        }else{
            isLoggedIn = true;
            alert("Welcome, User")
        }
    }else{
        alert("Account is Locked. Please contact Admin.")
        isRunning = false;

    }
}