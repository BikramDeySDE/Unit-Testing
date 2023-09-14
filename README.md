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
    "test": "mocha 'test-cases/**/*.specs.js"  
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

## Spy

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


#### How to use spy ?

```
describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){

        // creat 'spy' object from 'sinon'
        var spyObject = Sinon.spy({----the Object----,'{----function in the object to be spied----}');

        // calling a fuction with parameter for executing 
        {----the Object----}'{----function in the object to be executed----}({--parameters--})

        // actual test case for spying the function
        expect(spyObject.{----the function of sinon through which we are willing to test or spy----}).to.be.{--boolean (true/false)--};  
    }
}
```


---


