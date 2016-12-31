"use strict";
var path = require("path");

// Basic route that sends the user first to the AJAX Page
module.exports.home = function(req, res) {
    console.log(path.join(__dirname, "../public/home.html"));
  res.sendFile(path.join(__dirname, "../public/home.html"));

  //The following uses the ejs templating ability added to express
  // res.render('home'); //start at the home.html file
};

module.exports.survey =  function(req, res) {
   console.log(path.join(__dirname, "../public/survey.html"));
   res.sendFile(path.join(__dirname, "../public/survey.html"));
};
