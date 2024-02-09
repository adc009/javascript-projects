const rps = require('../RPS.js');

describe("rps test", function() {
    test("expect tie", function(){
        expect(rps.whoWon('rock','rock')).toEqual('TIE!');
    });


});