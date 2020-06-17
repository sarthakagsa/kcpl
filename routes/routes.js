var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
    res.render("home");    
});

router.get("/login",function(req,res){
    res.render("login");    
});


router.use("/vechilepaper",require("./vechilepaper"));

router.use("/vechileparts",require("./vechileparts"));

module.exports = router;