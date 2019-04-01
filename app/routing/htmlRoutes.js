// Dependencies
var path = require("path");

// Routing
module.exports = function (app) {

    // Enter survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Home Page, * allows it to be default to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
