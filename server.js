// Dependencies
var express = require("express");
var path = require("path");

// Setup express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Makes public folder static to be used on the web
// app.use(express.static('/app/public'));
app.use(express.static(path.join(__dirname, '/app/public/')));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Strat the server to begin listening
app.listen(PORT, function () {
    console.log("Starting! App listening at: http://localhost:" + PORT);
});