const fetchData = require('../controllers/fetchData');

test("testing a Promise", ()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('Bikram Dey');
    })
})

test("negative test case for testing a Promise", ()=>{
    return fetchData().then((data)=>{
        expect(data).not.toBe('Bikram');
    })
})
