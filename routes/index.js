var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile("/index.html",{ root: path.join(__dirname, '../views')});
  res.render("register",{err: req.query.invalid});
});

module.exports = router;
