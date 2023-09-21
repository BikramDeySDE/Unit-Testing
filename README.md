# Unit-Testing
Unit Testing using mocha and chai

---
---

# Mocha

#### To install 'mocha'
use command : 
```
npm i --save-dev mocha
```

#### To install 'chai'
use command :
```
npm i --save-dev chai
```

#### For Running the Test cases : (update this in 'package.json' file)

In case we have no nested/sub-folder under the folder 'specs' => It will test all the test cases written in the ".specs.js" files under the folder "specs"

```
"scripts": {
    "test": "mocha ./specs/*.specs.js"  
  }
```

OR


In case we have nested/sub-folder under the folder 'specs' => 
```
"scripts": {
    "test": "mocha ./specs/**/*.specs.js"  
  }
```

OR

In case we want to test only those files which are in 'test-cases' folder
```
"scripts": {
    "test": "mocha 'test-cases/**/*.specs.js'"  
  }
```


#### To Run all the test cases
use command :
```
npm run test OR npm test
```




#### If we want to run test for a single file and want to decide the file to be tested at the terminal
* in 'package.json' file :
  ```
  "scripts": {
    "test-single": "mocha"
  }
  ```
* in terminal :
  ```
  npm run test-single -- {{File-Path}}
  ```
> **NOTE** : We can also declare the file path in "scripts" instead of terminal



---
---



# Chai

#### Importing 'chai'
```
var chai = require("chai");
```

#### Importing 'assert', 'should' & 'expect'
```
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
```


#### Assert
```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){
        assert.{----name of the function through which wee need to test----}({----which parameter to be tested----},{----expected value we are expecting----});
    }
}
```


#### Should
```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){
        {----which parameter to be tested----}.should.{----name of the function through which wee need to test----}({----expected value we are expecting----});
    }
}
```


#### Expect
```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){
        expect.{----which parameter to be tested----}.to.{----name of the function through which wee need to test----}({----expected value we are expecting----});
    }
}
```





---
---



# Sinon

#### install 'sinon'
```
npm i --save-dev sinon
```

#### importing 'sinon'
```
var sinon = require("sinon");
```

#### To reset spy / To restore sinon
```
// Reset the spy before each test case
    beforeEach(function () {
        sinon.restore();
    });
```
> **_NOTE:_** If you are getting this error : `Attempted to wrap {{Function-Name}} which is already wrapped`
apply the code stated above at the starting of the test suit to reset spy for each test cases


---


## Spy


#### To reset spy / To restore sinon
```
// Reset the spy before each test case
    beforeEach(function () {
        sinon.restore();
    });
```
> **_NOTE:_** If you are getting this error : `Attempted to wrap {{Function-Name}} which is already wrapped`
apply the code stated above at the starting of the test suit to reset spy for each test cases


#### How to use spy ?

```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){

        // creat 'spy' object from 'sinon'
        var spyObject = Sinon.spy({----the Object----,'{----function in the object to be spied----}');

        // calling a fuction with parameter for executing 
        {----the Object----}.{----function in the object to be executed----}({--parameters--});

        // actual test case for spying the function
        expect(spyObject.{----the function of sinon through which we are willing to test or spy----}).to.be.{--boolean (true/false)--};  
    }
}
```


---


## Stub

#### How to use stub ?

```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){

        // creat 'stub' object from 'sinon'
        var stubObject = Sinon.stub({----the Object----,'{----function in the object to be stubbed----}');

        // here we are writting the logic for the condition that the function which is to be stubbed returns a particular value irrespective of any arguments
        stubObject.{----function of stub through which we are willing to stub----}({--arguments/parameters--}).{returns/resolves/....}(----that particular value we want to return----);

        // actual test case with execution of a function
        expect(----the Object----.{----function in the object to be executed----}(--arguments/parameters--)).to.be.equal{--expected value--};  
    }
}
```


---


## Mock

#### How to use mock ?

```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){

        // creat 'mock' object from 'sinon'
        var mockObject = Sinon.mock({----the Object----);

        // create 'expt' (i.e. expectation or expects) from mockObject
        var expt = mockObject.expects('{----function in the object to be mocked----}');

        // the actual test cases (here we can test for more than one conditions)
        expt.{----function of stub through which we are willing to mock----}(--expected value--);

        /*
        *----here we can test for more than one conditions if we want----
        *----expt.{----function of stub through which we are willing to mock----}(--expected value--);----
        *----expt.{----function of stub through which we are willing to mock----}(--expected value--);----
        */

        // the above conditions will be checks for this execution (i.e. let's call/execute a function with certain arguments/parameters to perform the above checks)
        ----the Object----.{----function in the object to be executed----}(--arguments/parameters--));

        // let's verify : 'verify' the 'mockObject'
        mockObject.verify();

    }
}
```


---


## Promise Testing

#### When do we use 'promise' ?
=> when our functions take time for getting the data from Database or third-party.

#### Required Package :
'chai-as-promised'

#### install 'chai-as-promised' :
```
npm i --save-dev chai-as-promised
```

#### how to use 'chai-as-promised' ?
* ###### Step-1 : install 'chai-as-promised'
  `npm i --save-dev chai-as-promised`
* ###### Step-2 : import 'chai-as-promised'
  `const chaiAsPromised = require('chai-as-promised');`
* ###### Step-3 : use 'chaiAsPromised' variable
  `chaiAsPromised.use();`
* ###### Step-4 : write the test cases
  use keyword `eventually`
* ###### Step-5 : to get the time-taken to get the result :
  use keyword `return` at the begining of test-case-line (before 'expect')
* ###### Step-6 : to check if the function is getting the value within a particular time or not :
  use `this.timeout(----the time----);`

  > **NOTE :**
  * it is the time(in 'milisecond') within which you want to check if the fucntion is getting/returning the value or not
  * if you don't want to check the 'timeout', either you don;t use 'this.timeout()' function or you can use the 'timeout()' function as : `this.timeout(0);` 
