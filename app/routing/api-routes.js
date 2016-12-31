"use strict";
var path = require("path");

// Friends (DATA)
// =============================================================
var friends = require("../data/friends.json");

module.exports.friends = function(req, res) {
  var chosen = req.params.whatToDo;

  if (chosen) {
    console.log(chosen);
    if(chosen == "list")
    {
      res.json(friends);
    }
    else{
      res.json(null);
    }
  }
}
