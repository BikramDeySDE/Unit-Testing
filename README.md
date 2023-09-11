# Unit-Testing
Unit Testing using mocha and chai

# TO install 'mocha'
use command : npm i --save-dev mocha

# TO install 'chai'
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



# To Run all the test cases
use command : npm run test
