const sentence = require('../controllers/sentence');

test("test case for string variable", ()=>{
    expect(sentence.x).toMatch('Hello Guys');
})

test("test case for string function 'line'", ()=>{
    expect(sentence.line()).toMatch('Hello Everyone');
})

test("test case for string function 'word'", ()=>{
    expect(sentence.word('Hi Guys')).toMatch('Hi Guys');
})

test("negative test case for string function 'word'", ()=>{
    expect(sentence.word('Hi')).not.toMatch('Hello');
})

test("test case for string function 'word' for parially matching", ()=>{
    expect(sentence.word('Hello Guys')).toMatch(/ll/);  // 'Hello Guys' muct contain 'll'
})
