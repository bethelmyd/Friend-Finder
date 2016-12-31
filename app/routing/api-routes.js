"use strict";
var path = require("path");
var fs = require("fs");

// Friends (DATA)
// =============================================================
var friends = require("../data/friends.json");

module.exports.friends = function(req, res) {
//   var chosen = req.params.whatToDo;

//   if (chosen) {
//     console.log(chosen);
//     if(chosen == "list")
//     {
      res.json(friends);
//     }
//     else{
//       res.json(null);
//     }
//   }
};

module.exports.addFriend =function(req, res) {
  var surveyAnswer = req.body;
//     surveyAnswers.scores = surveyAnswers.scores.map(function(val){
//     return parseInt(val);
// });
  console.log(surveyAnswer);
  var closestFriend = findClosestFriend(surveyAnswer);
//  characters.push(newcharacter);

  res.json(closestFriend);
  friends.push(surveyAnswer);
    fs.writeFile("./app/data/friends.json",JSON.stringify(friends), function(err){
        if(err){
            console.log("Friends write error: " + err);
            process.exit(1);
        }
    });
};

var findClosestFriend = function(surveyAnswer){
    if(friends.length == 0) return null;
    var closestFriend = friends[0];
    var closestScore = calcDistance(friends[0].scores, surveyAnswer.scores);
    for(var i = 1; i < friends.length; i++){
        var closeScore = calcDistance(friends[i].scores, surveyAnswer.scores);
        if(closeScore < closestScore){
            closestScore = closeScore;
            closestFriend = friends[i];
        }
    }
    return closestFriend;
};

var calcDistance = function(scores1, scores2){
    var total = 0;
    for(var i = 0; i < scores1.length; i++){
        total += Math.abs(parseInt(scores1[i]) - parseInt(scores2[i]));
    }
    return total;
}