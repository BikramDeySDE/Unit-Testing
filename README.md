# Unit-Testing
Unit Testing using mocha and chai

# To install 'mocha'
use command : npm i --save-dev mocha

# To install 'chai'
use command : npm i --save-dev chai

# For Running the Test cases : (update this in 'package.json' file)

In case we have no nested/sub-folder under the folder 'specs' => It will test all the test cases written in the ".specs.js" files under the folder "specs"

"scripts": {
    "test": "mocha ./specs/*.specs.js"  
  }


OR


In case we have nested/sub-folder under the folder 'specs' => 

"scripts": {
    "test": "mocha ./specs/**/*.specs.js"  
  }

OR

In case we want to test only those files which are in 'test-cases' folder

"scripts": {
    "test": "mocha 'test-cases/**/*.specs.js"  
  }



# To Run all the test cases
use command : npm run test OR npm test




# Assert

describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){
        assert.{----name of the function through which wee need to test----}({----which parameter to be tested----},{----expected value we are expecting----});
    }
}



# Should

describe('{----name of the test suit----}', function(){
    it('{----name of the test case----}', function(){
        {----which parameter to be tested----}.should.{----name of the function through which wee need to test----}({----expected value we are expecting----});
    }
}
