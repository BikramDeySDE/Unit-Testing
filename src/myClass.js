class MyClass{

    // constructor
    constructor(){
        console.log("initiate");
    }

    // function for adding two numbers
    add(arg1,arg2){
        var result;
        result = arg1 + arg2;
        return result;
    }
}

// exporting
module.exports = MyClass;
