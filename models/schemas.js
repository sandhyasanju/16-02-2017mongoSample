var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining schema for user registration
var userSchema = mongoose.Schema({
    firstName: { 
        type: String,
        // required: true,
        // max: 24 
    },
    lastName: {
        type: String,
        // required: true,
        // max: 24
    },
    email: { 
        type: String, 
        // required: [true, 'enter email'] ,
        // unique: true, 
        // index: { unique: true }  
    },
    gender: {
        type: String,
        // required: true
    },
    // age: {
    //     type: Number,
    //     required: true
    // },
    // countryCode: {
    //     type: Number,
    //     // required: true
    // },
    mobileNumber: {
        type: Number,
        // required: true,
        // max: 10
    },
    password: { 
        type: String,
        // required: true
    },
    confirmPassword: { 
        type: String, 
        // required: true 
    }
});

var user = mongoose.model('user', userSchema);

module.exports= user;