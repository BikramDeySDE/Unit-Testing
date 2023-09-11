var MyClass = require("../src/myClass"); // importing 'myClass'
var myObj = new MyClass();  // creating object of 'MyClass'

var chai = require("chai"); // importing 'chai'
var expect = chai.expect;   // fetching 'expect' from var 'chai'

// creating test-suit
describe("test-suit name", function(){

    // creating test-case
    it("test-case name", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    });

});
