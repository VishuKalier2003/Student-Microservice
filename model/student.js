const Mongoose = require("mongoose");

class Student {

    studentID = "";
    accKey = "";

    constructor(name, password, accNo) {
        this.name = name;
        this.password = password;
        this.accNo = accNo;
    }
}

const StudentSchema = new Mongoose.Schema({
    name : {type : String, required : true},
    studentID : {type : String},
    accNo : {type : String, required : true},
    age : {type : Number, required : true},
    accID : {type : String},
    monCredit : {type : Number},
    monDebit : {type : Number},
})