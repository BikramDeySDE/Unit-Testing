# Unit Testing using 'Jest'


## Jest

> **NOTE :** Here we will follow the filename for test-cases : *.test.js 

#### To install 'jest'
use command : 
```
npm install D jest
```

> **NOTE :** 'D' symbolizes that we have dependencies on it


#### For Running the Test cases : (update this in 'package.json' file)

```
"scripts": {
    "test": "jest"  
  }
```

#### For checking Code-coverage for the Test cases : 
use command :

```
npx jest --coverage
```

#### Some important parts of assert statements
1. toBe / not.toBe
2. toEqual / not.toEqual
3. toMatch / not.toMatch
