// importing 'chai'
var chai = require("chai");
// fetching 'expect' from 'chai'
var expect = chai.expect;

// importing 'sinon' from chai
var sinon = require("sinon");

// importing "marksController" for testing the function in it
var Marks = require("../controllers/marksController");
// creating object of "marksController"
var marksObject = new Marks();

// test suit
describe("-----test cases with STUB-----", function(){

    // restoring 'sinon'
    this.beforeEach(function(){
        sinon.restore();
    })

    // test case 1
    it("----test case for getting 'totalMarks' from the function 'calculateTotalMarks' if the function 'getExternalMarks' returns '5'----", function(){

        // creating 'stub' object
        var stubObject = sinon.stub(marksObject,'getExternalMarks');  // we will stub the function 'getExternalMarks' in 'marksObject'

        // here we are writting the logic for the condition thet the function 'getExternalMarks' returns '5'
        stubObject.withArgs(50).returns(5);   // stubObject (i.e. the function 'getExternalMarks' in 'marksObject') with argument '50' returning '5'
        
        // actual test case for getting 'totalMarks' from the function 'calculateTotalMarks' after applying the above condition (i.e. if the function 'getExternalMarks' returns '5')
        expect(marksObject.calculateTotalMarks(50)).to.be.equal(64);  // (50-1)  + (5) + 10 = 64

    })




    // test case 2
    it("----test case for getting 'totalMarks' from the function 'calculateTotalMarks' if the function 'getInternalMarks' returns '15'----", function(){

        // creating 'stub' object
        var stubObject = sinon.stub(marksObject,'getInternalMarks');    // // we will stub the function 'getInternalMarks' in 'marksObject'

        // here we are writting the logic for the condition thet the function 'getInternalMarks' returns '15'
        stubObject.withArgs(50).returns(15);    // // stubObject (i.e. the function 'getInternalMarks' in 'marksObject') with argument '50' returning '15'

        // actual test case for getting 'totalMarks' from the function 'calculateTotalMarks' after applying the above condition (i.e. if the function 'getInternalMarks' returns '15')
        expect(marksObject.calculateTotalMarks(50)).to.be.equal(76);  // 15 + (50+1) + 10 = 76 
    })
})
