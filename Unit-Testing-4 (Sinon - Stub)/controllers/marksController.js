class Marks{

    // constructor
    constructor(){
        // ------ empty constructor --------
    }

    // total marks
    calculateTotalMarks(marks){
        let internalMarks = this.getInternalMarks(marks);
        let externalMarks = this.getExternalMarks(marks);

        let totalMarks = internalMarks + externalMarks + 10;
        return totalMarks;
    }

    // internalMarks
    getInternalMarks(marks){
        let finalInternalMarks = marks - 1;
        return finalInternalMarks;
    }

    // externalMarks
    getExternalMarks(marks){
        let finalExternalMarks = marks + 1;
        return finalExternalMarks;
    }

}

module.exports = Marks;
