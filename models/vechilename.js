const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const VechileSchema = new Schema({

    vechilename : {
        type : String,
        required : true
    },
      
    vechilepaper : [{
            
                type:mongoose.Schema.Types.ObjectId,
                ref:"vechilepaper"
            
    }],
    vechileparts : [{
            
        type:mongoose.Schema.Types.ObjectId,
        ref:"vechileparts"
    }], 
});

const VechileModel = mongoose.model('vechile',VechileSchema); 
module.exports = VechileModel;