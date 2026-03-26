// MANLUTAC
function getCircleArea(radius){
    return 3.14 * radius * radius;
}
circleArea = getCircleArea(5);
console.log("Circle Area: " + circleArea);

function getAverage(num1,num2,num3,num4){
    return(num1+num2+num3+num4)/4;
}

averageVar = getAverage(30,11,18,19);
console.log("Average", averageVar);

function checkPassed(score,total){
    percentage = (score/total) * 100
    isPassed = percentage > 75;
    return isPassed;
}
isPassed = checkPassed(80,100);
console.log("Passed?" , isPassed);
