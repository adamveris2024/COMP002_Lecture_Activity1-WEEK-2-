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