var mangoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/test";
var schemas = require("./schemas");

//connecting with database
var connection = mangoose.connect(url,function(error,database){
    db = database;
    // collections = db.collection;
    if(error){
        console.log("Connection failed");
    }else {
        console.log("Connected successfully");
    }
});

// mangoose.model("user",userSchema);
 

module.exports = connection;