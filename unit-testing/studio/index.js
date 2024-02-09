
let launchcode = {
  'organization': 'nonprofit',
  'executiveDirector': 'Jeff',
  'percentageCoolEmployees': 100,
  'programsOffered': ["Web Development", "Data Analysis", "Liftoff"],
  'launchOutput': launchOutput,
}


/*
When passed a number that is ONLY divisible by 2, return 'Launch!'
When passed a number that is ONLY divisible by 3, return 'Code!'
When passed a number that is ONLY divisible by 5, return 'Rocks!'
When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
*/
function launchOutput(number) {
    let two = (number % 2 === 0);
    let three = (number % 3 === 0);
    let five = (number % 5 === 0);
    let output = "";

    if (!two && !three && !five) {
        return "Rutabagas! That doesn't work.";
    }
    if (two && five && !three) {
        return 'Launch Rocks! (CRASH!!!!)';
    }
    if (two) {
        output += "Launch";
    }
    if (three) {
        output += "Code";
    }
    if (five) {
        if (!two && !three) {
            output += "Rocks";
        }
        else {
            output += " Rocks";
        }
    }
    output += "!";
    return output;


}

module.exports = launchcode;