// Dependencies
var path = require("path");

// Routing
module.exports = function (app) {

    // Home Page
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Enter survey
    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}
