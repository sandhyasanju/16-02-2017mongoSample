var mongoose = require("mongoose");
var connection = require("./dbConnection");
var schemas = require("./schemas");
var express = require("express");
var router = express.Router();

//post method for registering
router.post("/register",function(req,resp){
    var email = req.body.email;
    schemas.find({email: email},function(error,data){
        if(data[0] != null){
            // resp.render("register",{title: "User already registered"});
            resp.redirect('/?invalid=' + encodeURIComponent('User already registered'));
        }else {
            var newUser = schemas({
    firstName: req.body.firstname,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    //  confirmPassword: req.body.confirmPassword,
    gender: req.body.gender,
    // countryCode: req.body.countryCode,
    mobileNumber: req.body.mobileNumber,
    // dateOfBirth: req.body.dateOfBirth,
});
console.log(newUser);

newUser.save(function(err,data){
    if (err) {throw err;console.log("error in query")}
    console.log('added to db');
    // db.close();
});
resp.send("hello");
        }
    })
});

module.exports = router;