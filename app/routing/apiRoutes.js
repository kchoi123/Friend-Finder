// Load Data
var subjects = require("../data/friends");

module.exports = function (app) {
  // Displays all subjects
  app.get("/api/friends", function (req, res) {
    return res.json(subjects);
  });

  // Displays a single subject, or returns false
  app.get("/api/friends/:subject", function (req, res) {
    var chosen = req.params.subject;

    console.log(chosen);

    for (var i = 0; i < subjects.length; i++) {
      if (chosen === subjects[i].routeName) {
        return res.json(subjects[i]);
      }
    }

    return res.json(false);
  });

  // Create New Subjects - takes in JSON input
  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newsubject = req.body;

    // Using a RegEx Pattern to remove spaces from newsubject
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newsubject.routeName = newsubject.name.replace(/\s+/g, "").toLowerCase();

    console.log(newsubject);

    subjects.push(newsubject);

    res.json(newsubject);
  });
};
