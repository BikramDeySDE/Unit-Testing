const call = require('../controllers/call');

test("test-case for call()", done =>{

    function callback(data){
        try {
            expect(data).toBe('Hey guys');
            done;
        } catch (error) {
            done(error);
        }
    }

    call(callback);
})
