// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Set up ejs as your templating engine
// =============================================================
// app.set('view engine', 'ejs');
// app.set('views', __dirname+'/app/public');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

// Star Wars Characters (DATA)
// =============================================================
var friends = [{
  "name": "Yoda",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]},
   {
     "name": "Luke",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
  },
 {
  name: "Obi Wan Kenobi",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
  }
  ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));

  //The following uses the ejs templating ability added to express
  // res.render('home'); //start at the home.html file
});

app.get("/survey", function(req, res) {
  console.log(path.join(__dirname, "app/public/survey.html"));
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/friends/:whatToDo?", function(req, res) {
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
});

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
