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

#### Testing a Promise

* with 'Return-Then'
```
test("----name of the test case----", ()=>{
  return ----promise function which we wan to test----().then((data)=>{
    expect(data).toBe(----expected value----);
  })
}
```

* with 'Async-Await'
```
test("----name of the test case----", async ()=> {
  const data = await ----the Promise function which we want to test----();
  expect(data).toBe(----expected value returned by the Promise function----);
})
```



#### Some important parts of assert statements
1. toBe / not.toBe
2. toEqual / not.toEqual
3. toMatch / not.toMatch    => for matching (comparing) Strings
