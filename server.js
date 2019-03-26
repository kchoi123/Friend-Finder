// Dependencies
var express = require("express");
var path = require("path");

// Setup express app
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Strat the server to begin listening
app.listen(PORT, function () {
    console.log("Starting!");
    console.log("App listening on PORT " + PORT);
});

// Starting the home page "/" or index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'app', 'public', "home.html"));
});

// Enter survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'public', "survey.html"));
  });