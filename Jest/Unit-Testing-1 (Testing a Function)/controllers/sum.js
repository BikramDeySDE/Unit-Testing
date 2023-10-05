const sum = require("../controllers/sum");

test("test case 1 for sum()", ()=>{
    expect(sum(2,3)).toBe(5);
})

test("test case 2 for sum()", ()=>{
    expect(sum(6,5)).not.toBe(2);
})
