// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("organization returns 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("executiveDirector returns 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("percentageCoolEmployees returns 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programsOffered contains Web Development, Data Analysis, and Liftoff and is size 3", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);

  });
  
  test("launchOutput - When passed a number that is ONLY divisible by 2, return 'Launch!'", function() {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
    
  });
  test("launchOutput - When passed a number that is ONLY divisible by 3, return 'Code!'",function() {
    expect(launchcode.launchOutput(9)).toBe("Code!");

  });
  test("launchOutput - When passed a number that is ONLY divisible by 5, return 'Rocks!'",function() {
    expect(launchcode.launchOutput(25)).toBe('Rocks!');

  });
  test("launchOutput - When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'",function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');

  });
  test("launchOutput - When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'",function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');

  });
  test("launchOutput - When passed a number that is divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)'",function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');

  });
  test("launchOutput - When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');

  });
  test("launchOutput - When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'",function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");

  });
  

});

/*
["Web Development", "Data Analysis", "Liftoff"]

*/