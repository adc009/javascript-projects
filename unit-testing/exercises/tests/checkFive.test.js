const checkFive = require('../checkFive.js');

describe("check five", function(){
    it("should return 'num is less than 5.' when num<5", function() {
        expect(checkFive.checkFive(4)).toBe("4 is less than 5.");
    });
    it("should return 'num is greater than 5.' when num>5", function() {
        expect(checkFive.checkFive(6)).toBe("6 is greater than 5.");
    });
    it("should return 'num is equal to 5.' when num===5", function() {
        expect(checkFive.checkFive(5)).toBe("5 is equal to 5.");
    });


});

// describe("check five", function() {

// });