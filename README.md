# Unit-Testing
Unit Testing using mocha and chai


# For Running the Test cases :

In case we have no nested/sub-folder under the folder 'specs' => It will test all the test cases written in the ".specs.js" files under the folder "specs"

"scripts": {
    "test": "mocha ./specs/*.specs.js"  
  }


OR


In case we have nested/sub-folder under the folder 'specs' => 

"scripts": {
    "test": "mocha ./specs/**/*.specs.js"  
  }
