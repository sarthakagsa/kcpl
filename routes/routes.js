var express = require("express");

var passport = require("passport");

var User = require("../models/user");

var router = express.Router();

router.get("/",function(req,res){
    res.render("home");    
});

router.get("/login",function(req,res){
    res.render("login");    
});

router.get("/signup",function(req,res){
    res.render("signup");    
});

router.post("/signup",function(req,res,next) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email:email},function(err,user) {
        if (err) {
            return next(err);
        }
        if (user) {
            req.flash("error","Theres aldready an account with this email");
            return res.redirect("/signup");
        }

        var newUser = new User({
            email:email,
            password:password
        });
        console.log(newUser);
        newUser.save(next);
    });
},   passport.authenticate("login",{
    successRedirect:"/",
    failureRedirect : "/login",
    failureFlash : true,
})
);


router.use("/vechilepaper",require("./vechilepaper"));

router.use("/vechileparts",require("./vechileparts"));

module.exports = router;