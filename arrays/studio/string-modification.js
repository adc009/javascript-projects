const input = require('readline-sync');
let str = "LaunchCode";

// Lau nchCode
// 012 3456789
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
newStr = str.slice(3) + str.slice(0,3);
// console.log(str);
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`Original string: ${str} \n--------------------------------\nNew string: ${newStr}\n--------------------------------`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userNum = input.question('Number of letters to relocate? ');
// console.log(userNum);

let errorMessage = "";

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userNum > str.length) {
    newStr = str.slice(3) + str.slice(0,3);
    errorMessage = "\nInput number too high. Defaulting to moving (3) characters.\n--------------------------------"
}
else {
    newStr = str.slice(userNum) + str.slice(0,userNum);
}

console.log(`${errorMessage}\nOriginal string:   ${str} \n--------------------------------\nNew string:        ${newStr}`);