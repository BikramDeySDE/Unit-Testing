const fetchData = require('../controllers/fetch-data');

test("testig Promise with async-await", async ()=>{
    const data = await fetchData();    // storing the return value of the fucntion 'fetchData' in variable 'data'
    expect(data).toBe('Hello from Bikram');
})

test("negative test case for testig Promise with async-await", async ()=>{
    const data = await fetchData();
    expect(data).not.toBe('Bikram');
})
