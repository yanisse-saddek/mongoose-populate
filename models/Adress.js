var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Adress = mongoose.Schema({
    streetName:String,
    streetNumber:String,
    postCode:String,
    city:String

})
var AdressModel = mongoose.model('Adress', Adress);
module.exports = AdressModel;
