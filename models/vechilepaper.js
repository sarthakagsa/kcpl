const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const VechilePaperSchema = new Schema({ 
    tax : {
        type : Date,
        required : true
    },
    pollution : {
        type : Date,
        required : true
    },
    fitness : {
        type : Date,
        required : true
    },
    insurance : {
        type : Date,
        required : true
    },      
});

const VechilePaperModel = mongoose.model('vechilepaper',VechilePaperSchema);
  
module.exports = VechilePaperModel;