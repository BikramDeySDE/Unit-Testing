const fetchData = require('../controllers/fetchData');

test("testing a Promise", ()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('Bikram Dey');    // storing the return value of the fucntion 'fetchData' in variable 'data'and then check that 'data' variable 
    })
})

test("negative test case for testing a Promise", ()=>{
    return fetchData().then((data)=>{
        expect(data).not.toBe('Bikram');
    })
})
