// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');

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

// Routes
// =============================================================

app.use('/', htmlRoutes.home);
app.get('/survey', htmlRoutes.survey);

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/friends", apiRoutes.friends);
app.post("/api/friends", apiRoutes.addFriend);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
