const expect    = require("chai").expect;
const Roman     = require('../app/roman.js');

describe("Roman Parser", function() {
    const roman=new Roman();
    const failedValue="";
    
    describe("Int to Roman Converter", function() {
        it("convert int to roman", function() {
            let res = roman.romanize(36);
            expect(res).to.equal("XXXVI");

            res = roman.romanize("36");
            expect(res).to.equal("XXXVI");
        });

        it("convert string to roman", function() {
            let res = roman.romanize("as");
            expect(res).to.equal(failedValue);

            
            res = roman.romanize("");
            expect(res).to.equal(failedValue);

            res = roman.romanize("XXXX");
            expect(res).to.equal(failedValue);
        });

        it("convert negative-zero int to roman", function() {
            let res = roman.romanize("0");
            expect(res).to.equal(failedValue);

            
            res = roman.romanize(0);
            expect(res).to.equal(failedValue);

            res = roman.romanize(-1);
            expect(res).to.equal(failedValue);

            res = roman.romanize(false); //0
            expect(res).to.equal(failedValue);

            res = roman.romanize(true); //1
            expect(res).to.equal("I");
        });

        it("convert non-absoloute int to roman", function() {
            let res = roman.romanize("0.1");
            expect(res).to.equal(failedValue);

            
            res = roman.romanize(1.0);
            expect(res).to.equal("I");

            res = roman.romanize(1.1);
            expect(res).to.equal(failedValue);

            res = roman.romanize("1.0"); //1
            expect(res).to.equal("I");
        });

        it("convert empty values to roman", function() {
            let res = roman.romanize("");
            expect(res).to.equal(failedValue);

            
            res = roman.romanize(null);
            expect(res).to.equal(failedValue);

            res = roman.romanize();
            expect(res).to.equal(failedValue);

            res = roman.romanize(undefined);
            expect(res).to.equal(failedValue);
        });
    });
});