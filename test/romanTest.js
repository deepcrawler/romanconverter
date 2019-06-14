const expect    = require("chai").expect;
const Roman     = require('../app/roman.js');

describe("Roman Parser", function() {
    const roman=new Roman();
    
    describe("Int to Roman Converter", function() {
        it("convert int to roman", function() {
            let res = roman.romanize(36);
            expect(res).to.equal("XXXVI");

            res = roman.romanize("36");
            expect(res).to.equal("XXXVI");
        });
    });
});