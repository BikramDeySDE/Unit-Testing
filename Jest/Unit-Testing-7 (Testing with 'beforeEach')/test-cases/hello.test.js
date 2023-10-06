const hello = require('../controllers/hello');
const common = require('../controllers/common');

// This block will execute before each test
beforeEach(()=>{
    console.warn(common()); // we are printing the return value of function 'common' on console as warning before each test-case
})

// test cases
test("test case 1", ()=>{
    expect(hello()).toBe('Hello Guys');
})

test("test case 2", ()=>{
    expect(hello()).not.toBe('Hi');
})
