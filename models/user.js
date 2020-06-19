var bcrypt = requrie("bcryptjs");
var mongoose = require("mongoose");

const SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
    email : {type:String, required:true, unique:true},
    password : {type:String, required:false}
});

userSchema.pre("save",function(done) {
    var user = this;

    if(!user.isModified("password")){
        return done();
    }

    bcrypt.genSalt(SALT_FACTOR,function (params) {
        
    });
    
})
var user = mongoose.model("User", userSchema);

module.exports = User;