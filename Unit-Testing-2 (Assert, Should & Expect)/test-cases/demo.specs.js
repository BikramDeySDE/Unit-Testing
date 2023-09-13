// impoprting 'chai'
var chai = require('chai');
const { it } = require('mocha');
// fetching 'assert' from 'chai' library
var assert = chai.assert;
// fetching 'should' from 'chai' library
var should = chai.should();
// fetching 'expect' from 'chai' library
var expect = chai.expect;

/*------------------------------------------------------
* ---------------------ASSERT---------------------------
* ------------------------------------------------------
*/

// test suit
describe('------Assert-----',function(){

    // declaring variables
    let myName = "Bikram Dey";
    let myObject = {
        item:[{
            id:1, name:"Bik"
        },{
            id:2, name: "Aru"
        }],
        title: "My Object"
    }

    // test case 1
    it('--test case for type of--', function(){
        assert.typeOf(myName,"string");
    })

    // test case 2
    it('--test case for equal matches--', function(){
        assert.equal(myName,"Bikram Dey");
    })
    
    // test case 3
    it('--test case for length of--', function(){
        assert.lengthOf(myName,10);
    })


    // test case 4 (for 'myObject')
    it('--test case for length of "myObject"--',function(){
        assert.lengthOf(myObject.item,2);
    })
});






/*------------------------------------------------------
* ---------------------SHOULD---------------------------
* ------------------------------------------------------
*/

// test suit
describe('-----should-----', function(){

    // declaring variables
    let myName = "Bikram Dey";
    let myObject = {
        item: [{
            id: 1, name: "Bik"
        },{
            id: 2, name: "Aru"
        }],
        title: "My Object"
    }

    // test case 1
    it('--test case for type of--', function(){
        myName.should.be.a('string');
    })
    
    // test case 2
    it('--test case for equal matches--', function(){
        myName.should.equal("Bikram Dey");
    })

    // test case 3
    it('--test case for length of--', function(){
        myName.should.have.lengthOf(10);
    })

    // test case 4
    it('--test case for length of "myObject"--', function(){
        myObject.should.have.property('item').with.lengthOf(2);
    })


})




/*------------------------------------------------------
* ---------------------EXPECT---------------------------
* ------------------------------------------------------
*/



// test suit
describe('-----expect------', function(){

    // declaring variables
    let myName = "Bikram Dey";
    let myObject = {
        item: [{
            id: 1, name: "Bik"
        },{
            id: 2, name: "Aru"
        }],
        title: "My Object",
        address: {
            country: "India",
            phoneNo: [9876543210,9753186420]
        }
    }


    // test case 1
    it('--test case for type of--', function(){
        expect(myName).to.be.a("string");
    })

    // test case 2
    it('--test case for equal matches--', function(){
        expect(myName).to.equal("Bikram Dey");
    })

    // test case 3
    it('--test case for length of--', function(){
        expect(myName).to.have.lengthOf(10);
    })

    // test case 4
    it('--test case for length of "myObject"--', function(){
        expect(myObject).to.have.property("item").with.lengthOf(2);
    })

    // test case 5
    it('--test case for checking if there are three keys named "item", "title" and "address" in "myObject"', function(){
        expect(myObject).to.have.all.keys("item","title","address");
    })

    // test case 6
    it('--test case for checking "phoneNo" present as nested property in address in "myObject"', function(){
        expect(myObject).to.have.nested.property('address.phoneNo');
    })
    
    // test case 7
    it('--test case for checking "phoneNo" present as nested property in address in "myObject" and there should be atleast "one" value in the "phoneNo" i.e. having value on "0"th index', function(){
        expect(myObject).to.have.nested.property('address.phoneNo[0]');
    })

    // test case 8
    it('--test case for checking "phoneNo" present as nested property in address in "myObject" and there should be a value on index "1"', function(){
        expect(myObject).to.have.nested.property('address.phoneNo[1]');
    })

    // test case 9
    it('--test case for checking "country" present as nested property in address in "myObject" and the value is "India" or not', function(){
        expect(myObject).to.have.nested.include({'address.country':'India'});
    })

    // test case 10
    it('--test case for checking "title" present as property in address in "myObject" and the value is "My Object" or not', function(){
        expect(myObject).to.have.include({'title':'My Object'});
        // expect(myObject).to.include({'title':'My Object'});
        // expect(myObject).to.have.property('title').with.include('My Object');
        // expect(myObject.title).to.include("My Object");
    })

    // test case 11
    it('-- test case for checking the phone no in the index no "0" is "9876543210" or not', function(){
        expect(myObject).to.have.nested.include({'address.phoneNo[0]':9876543210});
    })
})
