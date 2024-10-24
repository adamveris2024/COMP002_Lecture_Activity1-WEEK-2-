// Declare a new variable “myGrade” and assign a number value from 0-100 to it.
// Write an if/else-if/else statement that displays the letter grade using console.log(...) (A for 90+, B for 80-89, C for 70-79, D for 60-69, F for 59 and below)
// Modify the value inside of “myGrade” to test your code.
// What should go in your else statement?
// Write a switch statement that does the same thing as the if/else-if/else statement above. 
// Which do you prefer? Why?
// Which version of the code looks cleaner/easier to understand to you? Why?
// Write a for loop that prints all value from 1 to 100
// Modify your for loop to make it output an exclamation point for all odd numbers instead of the number


for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}

let outputVariable = "";
for(let i = 0; i <= 10; i++){
    outputVariable += "!";
    console.log(outputVariable);
}

let myGrade = 100; // Assign a value between 0 and 100

if (myGrade >= 90) {
    console.log('A');
} else if (myGrade >= 80) {
    console.log('B');
} else if (myGrade >= 70) {
    console.log('C');
} else if (myGrade >= 60) {
    console.log('D');
} else {
    console.log('F'); // else statement for 59 and below
}

switch (true) {
    case (myGrade >= 90):
        console.log('A');
        break;
    case (myGrade >= 80):
        console.log('B');
        break;
    case (myGrade >= 70):
        console.log('C');
        break;
    case (myGrade >= 60):
        console.log('D');
        break;
    default:
        console.log('F'); // default for 59 and below
}