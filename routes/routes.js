var express = require("express");

var passport = require("passport");

var User = require("../models/user");

var ensureAuthenticated = require("../auth/auth").ensureAuthenticated;

var router = express.Router();

router.use(function(req,res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");
    next();
});

router.get("/",ensureAuthenticated,function(req,res){
    res.render("home");    
});

router.get("/login",function(req,res){
    res.render("login");    
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/login");
 });

router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
 }));

router.get("/signup",function(req,res){
    res.render("signup");    
});

router.post("/signup", function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
 
    User.findOne({ email: email }, function (err, user) {
       if (err) { return next(err); }
       if (user) {
          req.flash("error", "There's already an account with this email");
          return res.redirect("/signup");
       }
 
       var newUser = new User({
          password: password,
          email: email
       });
 
       newUser.save(next);
 
    });
 
 }, passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
 }));


router.use("/vechilepaper",ensureAuthenticated,require("./vechilepaper"));

router.use("/vechileparts",ensureAuthenticated,require("./vechileparts"));

module.exports = router;