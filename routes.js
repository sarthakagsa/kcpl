var express = require("express");

var router = express.Router();

router.get("/",function(req,res){

    console.log("KCPL");
    res.render("home");    
});

router.get("/vechilepaper",function(req,res){

    console.log("KCPL");
    res.render("vechilepaper");    
});

module.exports = router;