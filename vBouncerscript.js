age = prompt("How old are you?");
//if age is less than 0 print error
age = Number(age);

if (age < 0){
    console.log("Please refresh the page and enter a positive number")
    throw new Error("Please refresh the page and enter a positive number")
}
// if age is odd print "your age is odd"
if ((age % 2) !== 0){
    console.log("your age is odd")
}

// if age is a perfect square print"perfect square"
function isPerfectSqr(num){
   const sqrRoot = (Math.sqrt(age));
   if  (Number.isInteger(sqrRoot) == true){
       return true;
   }
   else{
       return false;
   }
// If age is a perfect square (how instructor did it.
// if(age % Math.sqrt(age) === 0) {
//     console.log("Your age is a perfect square!");
//   }
// }
// if (isPerfectSqr(age) == true){
//     console.log("Perfect Square");
// }

if (age < 18){
    console.log("Sorry, you are not old enough to enter");
}

if((age < 21) && (age >= 18)){
    console.log( "You may enter but you may not drink");
}

console.log (typeof age)
if (age === 21){
    console.log("Happy Birthday! You get a shot on the house!");
}
else if(age > 21){
    console.log( "You may enter and drink");
}
