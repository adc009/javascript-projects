let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 


function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let str = protoArray1;
	let check = str.includes(',');
	let output;
	let tempArray;
	//TODO: 2. write the code required for this step
	if (check) {
		tempArray = str.split(',');
		tempArray.reverse();
		output = tempArray.join(',');
	}
	else {
		output = "String does not have a comma.";
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let str = protoArray2;
	let check = str.includes(';');
	let output;
	let tempArray;
	//TODO: 2. write the code required for this step
	if (check) {
		tempArray = str.split(';');
		tempArray.sort();
		output = tempArray.join('-');
	}
	else {
		output = "String does not have a semicolon.";
	}
  
	return output;
}

//4)
function reverseSpaces() {
	let str = protoArray3;
	let check = str.includes(' ');
	let output;
	let tempArray;
	//TODO: 2. write the code required for this step
	if (check) {
		tempArray = str.split(' ');
		tempArray.sort();
		tempArray.reverse();
		output = tempArray.join(' ');
	}
	else {
		output = "String does not have a space.";
	}
	return output;
}

//5)
function commaSpace() {
	let str = protoArray4;
	let check = str.includes(', ');
	let output;
	let tempArray;
	//TODO: 2. write the code required for this step
	if (check) {
		tempArray = str.split(', ');
		tempArray.reverse();
		output = tempArray.join(',');
	}
	else {
		output = "String does not have a comma space.";
	}
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
