var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Student = mongoose.Schema({
    firstName:String,
    surName:String,
    Adress:{
        type:Schema.Types.ObjectId,
        ref:"Adress"
    }
})
var StudentModel = mongoose.model('Student', Student);
module.exports = StudentModel;
