const name = require("../controllers/name");

test("test case 1 for name()", ()=>{
    expect(name()).toEqual({name: 'Bikram'});
})

test("test case 2 for name()", ()=>{
    expect(name()).not.toEqual({name: 'Bik'});
})
