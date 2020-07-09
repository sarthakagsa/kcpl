const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const VechilePartsSchema = new Schema({ 
    tyre : {
        type : Boolean,
        required : true
    },
      
});

const VechileParts = mongoose.model('vechileparts',VechilePartsSchema);
  
module.exports = VechilePartsModel;