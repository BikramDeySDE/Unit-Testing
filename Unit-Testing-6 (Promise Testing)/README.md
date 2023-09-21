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
