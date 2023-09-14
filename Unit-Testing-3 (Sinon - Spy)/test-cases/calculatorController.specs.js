// importing 'chai'
var chai = require("chai");
// fetching 'expect'
var expect = chai.expect;

// importing 'calculatorController' to test file
var calculator = require("../controllers/calculatorController");
// creating object of 'calculatorController'
var calculatorObject = new calculator();

// importing 'sinon'
var sinon = require("sinon");
const Sinon = require("sinon");



// test-suit
describe("----------test suit for spy----------", function(){

    // Reset the spy before each test case
    beforeEach(function () {
        sinon.restore();
    });

    // test case 1
    it("----Test case for checking wherther the function 'addFive' is getting called Once or not----", function(){
        
        // creating object of 'spy' from sinon
        var spyObject = Sinon.spy(calculatorObject,'addFive');  // we need to check the function 'addFive' in the object 'calculatorObject'

        // calling fuction 'addFiveOnce' with parameter '10' from 'calculatorObject' for executing 
        calculatorObject.addFiveOnce(10);

        // actual test case for checking the function 'addFive' is getting called 'Once' or not while executing 'calculatorObject.addFiveOnce(10)'
        expect(spyObject.calledOnce).to.be.true;  

    })

    // test case 2
    it("----Test case for checking wherther the function 'addFive' is getting called Twice or not----", function(){

        // creating 'spy' object from sinon
        var spyObject = sinon.spy(calculatorObject,'addFive');  // we need to check the function 'addFive' in the object 'calculatorObject'

        // calling fuction 'addFiveOnce' with parameter '50' from 'calculatorObject' for executing 
        calculatorObject.addFiveTwice(50);

        // actual test case for checking the function 'addFive' is getting called 'Twice' or not while executing 'calculatorObject.addFiveTwice(50)'
        expect(spyObject.calledTwice).to.be.true;

    })
    

    // test case 3
    it("-----Test case for checking wherther the function 'addFive' is getting called with correct parameters or not", function(){

        // creating 'spy' object from 'sinon'
        var spyObject = sinon.spy(calculatorObject,'addFive');  // we need to check the function 'addFive' in the object 'calculatorObject'

        // calling fuction 'addFiveOnce' with parameter '20' from 'calculatorObject' for executing 
        calculatorObject.addFiveThriceWithStatus(20,1);

        //
        expect(spyObject.calledWith(20,1)).to.be.true;

    })

})



