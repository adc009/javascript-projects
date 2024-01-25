function makeLine(size, char='#') {
    let output = '';
    for (let i=0; i<size; i++) {
        output += char;
    }
    return output;
}

// console.log(makeLine(5, 'A'));

function makeSpace(size) {
    let output = '';
    for (let i=0; i<size; i++) {
        output += ' ';
    }
    return output;
}

function makeSquare(size, char='#') {
    // let output = '';
    // for (let i=0; i<size; i++) {
    //     output+=makeLine(size);
    //     if (i<size-1) {
    //         output+='\n';
    //     }
    // }
    // return output;
    return makeRectangle(size, size, char);
}

// console.log(makeSquare(5, 'A'));

function makeRectangle(width, height, char='#') {
    let output = '';
    for (let i=0; i<height; i++) {
        output+=makeLine(width, char);
        if (i<height-1) {
            output+='\n';
        }
    }

    return output;
}

// console.log(makeRectangle(5, 3, 'A'));

function makeDownwardStairs(height, char='#') {
    let output = '';
    for (let i=1; i<=height; i++) {
        output += makeLine(i,char);
        if (i<height) {
            output+='\n';
        }
    }
    return output;
}

// console.log(makeDownwardStairs(5, 'A'));

function makeSpaceLine(numSpaces, numChars, char='#') {
    return makeSpace(numSpaces) + makeLine(numChars, char) + makeSpace(numSpaces);
}

// console.log(makeSpaceLine(3, 5, 'A'));

function makeIsoscelesTriangle(height, char='#') {
    let output = '';
    for (let i=0; i<height; i++) {
        output += makeSpaceLine(height-i-1,2*i+1, char);
        if (i<height-1) {
            output+='\n';
        }
    }
    return output;
}

// console.log(makeIsoscelesTriangle(5, 'A'));

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

function makeDiamond(height, char='#') {
    return makeIsoscelesTriangle(height, char) + '\n' + reverse(makeIsoscelesTriangle(height, char));
}

console.log(makeDiamond(5, 'A'));