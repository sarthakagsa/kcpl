const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const VechileSchema = new Schema({

    vechilename : {
        type : String,
        required : true
    },
    userID:{type:mongoose.Schema.Types.ObjectId, required:false, unique:false} 
});

const VechileModel = mongoose.model('vechile',VechileSchema); 
module.exports = VechileModel;