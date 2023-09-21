// importing 'chai'
var chai = require("chai");

// import 'sinon'
var sinon = require("sinon");

// importing 'marksController' to test its function
var Marks = require("../controllers/marksController");
// creating object of 'Marks'
var marksObject = new Marks();



// test suit
describe("-----Test Suit for MOCK-----", function(){

    // test case 1
    it("--test case for checking the function 'getExternalMarks' is being called 'Once' or not and with 'which Argument'--", function(){

        // creating 'mock' object from 'sinon'
        var mockObject = sinon.mock(marksObject);   // we are mocking for 'marksObject'

        // creating expection from 'mockObject'
        var expt = mockObject.expects('getExternalMarks');   // we are mocking for the function 'getExternalMarks' in 'marksObject'

        // the actual test cases (here we can test for more than one conditions)
        expt.exactly(1);    // test case 1 : is the function 'getExternalMarks' being called exactly 'Once' ?
        expt.withArgs(50);  // test case 2 : is the function 'getExternalMarks' being called with argument '50' ?

        // the above conditions will be checks for this execution (i.e. let's call/execute a function with certain arguments/parameters to perform the above checks)
        marksObject.calculateTotalMarks(50);

        // let's verify : 'verify' the 'mockObject'
        mockObject.verify();

    })



    
    // test case 2
    it("--test case for checking the function 'getInternalMarks' is being called 'Once' or not and with 'which Argument'--", function(){

        // creating 'mock' Object
        var mockObject = sinon.mock(marksObject);   // we are mocking for 'marksObject'

        // creating expection from 'mockObject'
        var expt = mockObject.expects('getInternalMarks');  // we are mocking for the function 'getInternalMarks' in 'marksObject'

        // the actual test cases (here we can test for more than one conditions)
        expt.exactly(1);    // test case 1 : is the function 'getInternalMarks' being called exactly 'Once' ?
        expt.withArgs(40);  // test case 2 : is the function 'getInternalMarks' being called with argument '40' ?

        // the above conditions will be checks for this execution (i.e. let's call/execute a function with certain arguments/parameters to perform the above checks)
        marksObject.calculateTotalMarks(40);

        // let's verify : 'verify' the 'mockObject'
        expt.verify();
    })

})
