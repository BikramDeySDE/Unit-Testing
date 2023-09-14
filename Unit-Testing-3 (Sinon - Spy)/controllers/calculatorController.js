class Calculator{


    // constructor
    constructor(){

    }


    // calculator 
    // addFiveOnce : here we will pass a numeric value as 'num' and we will call the function 'addFive' and pass the 'num' to the function and get the result 
    
    addFiveOnce(num){
        let result = this.addFive(num);
        return result;
    }

    addFiveTwice(num){
        let result1 = this.addFive(num);
        let result = this.addFive(result1);
        return result;
    }

    addFiveThriceWithStatus(num,status){
        let result1 = this.addFive(num,status);
        let result2 = this.addFive(num,status);
        let result3 = this.addFive(num,status);
    }

    // addFive : adding five to the parameter 'num'
    addFive(num,status){
        let result = num + 5;
        return result;
    }

}

// exporting
module.exports = Calculator;
