var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash");
var params = require("./params/params");
var setUpPassport = require("./setupPassport");
var bodyParser= require("body-parser");

var app= express();

mongoose.connect("mongodb+srv://sarthakagsa:admin@kcpl-aunih.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser : true, useCreateIndex: true});

setUpPassport();
app.set("port",process.env.PORT || 3000);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret: "alskdjfhislhsdkjfhalusdf",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash);

app.use("/",require("./routes/routes"));
app.listen(app.get("port"),function() {
    console.log("Server started on port"+app.get("port"));
    
});